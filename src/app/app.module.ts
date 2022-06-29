import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navi/nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DisplayResumeComponent } from './display-resume/display-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    DisplayResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
