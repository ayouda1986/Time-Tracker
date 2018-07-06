import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { SprintComponent } from './sprint/sprint.component';

export const ROUTES: Routes = [
  
  { path: 'sprint', component: SprintComponent},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
