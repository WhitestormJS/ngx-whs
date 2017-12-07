import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NgxWhsModule } from '../ngxWhs.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CustomPointLightComponent, MenuComponent } from './components';

import { HelloWorldComponent } from './helloword';
import { MouseComponent } from './mouse';
import { TextComponent } from './text';
import { TerrainComponent } from './terrain';
import { SaturnComponent } from './saturn';

const COMPONENTS = [
  MenuComponent,
  CustomPointLightComponent,
  HelloWorldComponent,
  MouseComponent,
  TextComponent,
  TerrainComponent,
  SaturnComponent,
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxWhsModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
