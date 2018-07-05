import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.scss']
})
export class NewSprintComponent implements OnInit {

  sprints = [
    {"id":1, "name": "New-sprint"},
    {"id":2, "name": "past-sprint"},
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(sprints){
    this.router.navigate(['/new-sprint',sprints.id])
  }
}
