import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgWhsModuls } from '../../../src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgWhsModuls,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
