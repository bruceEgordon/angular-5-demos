import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { Chapter14 } from './chapter14/14.8.component';
import { HomePageComponent } from './chapter15/home.page.component';
import { BasicFormComponent } from './chapter15/basic.form.component';
import { PeopleListComponent } from './chapter15/15.27.people.component';
import { PersonDetailComponent } from './chapter15/15.24.person.detail.component';
import { routing } from './chapter15/app.routes';
import { Chapter15 } from './chapter15/15.12.app.component';


@NgModule({
  declarations: [
    Chapter14,
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
  bootstrap: [Chapter14]
})
export class AppModule { }
