import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MyFeatureModule } from './chapter10/myfeature.module';
import { Chapter5 } from './chapter10/5.9.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyFeatureModule
  ],
  providers: [],
  bootstrap: [Chapter5]
})
export class AppModule { }
