import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
  { path: 'sprint', component: SprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
