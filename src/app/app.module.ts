import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StarterComponent } from './chapter4/4.3.component';


@NgModule({
  declarations: [
    StarterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StarterComponent]
})
export class AppModule { }
