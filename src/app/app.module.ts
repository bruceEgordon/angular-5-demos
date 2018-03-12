import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { Chapter15 } from './chapter15/15.29.app.component';
import { HomePageComponent } from './chapter15/home.page.component';
import { BasicFormComponent } from './chapter15/basic.form.component';
import { PeopleListComponent } from './chapter15/15.27.people.component';
import { PersonDetailComponent } from './chapter15/15.24.person.detail.component';
import { routing } from './chapter15/app.routes';


@NgModule({
  declarations: [
    Chapter15,
    HomePageComponent,
    BasicFormComponent,
    PeopleListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [Chapter15]
})
export class AppModule { }
