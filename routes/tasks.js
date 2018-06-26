var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ayouda1986:canada001@ds217351.mlab.com:17351/myproject_brad', ['tasks']);

//Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get Single Task
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//save task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
     } else{
         db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        })
     }

 });

 //Delete Task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


//Update task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    
    if(task.title){
        updTask.title = task.title;
    }
 
    if(!updTask){
       res.status(400);
       res.json({
           "error":"Bad Data"
       });
    }else{
            db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
                if(err){
                    res.send(err);
                }
                res.json(task);
    });
    }
});

module.exports = router;
