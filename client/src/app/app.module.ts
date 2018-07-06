import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { PastSprintComponent } from './past-sprint/past-sprint.component';
import { SprintComponent } from './sprint/sprint.component';


@NgModule({
  declarations: [
    AppComponent,

    CallbackComponent,

    WelcomeComponent,

    NewSprintComponent,

    PastSprintComponent,

    SprintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
