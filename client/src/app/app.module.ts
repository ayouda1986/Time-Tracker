import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { PastSprintComponent } from './past-sprint/past-sprint.component';
import { SprintComponent } from './sprint/sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AboutComponent,
    LoginComponent,
    NewSprintComponent,
    PastSprintComponent,
    SprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
