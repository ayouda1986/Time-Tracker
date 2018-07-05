import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SprintComponent } from './sprint/sprint.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sprint', component: SprintComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
