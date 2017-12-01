import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgxWhsModule } from '../ngxWhs.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HelloworldModule } from './helloword';

import { CustomPointLightComponent } from './components';

const COMPONENTS = [
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxWhsModule,
    HelloworldModule,
  ],
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
