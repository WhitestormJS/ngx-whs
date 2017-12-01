import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxWhsModule } from '../../ngxWhs.module';


import { HelloWorldRoutingModule } from './helloworld-routing.module';
import { HelloWorldComponent } from './helloworld.component';

import { CustomPointLightComponent } from '../components';

@NgModule({
  imports: [
    CommonModule,
    HelloWorldRoutingModule,
    NgxWhsModule,
  ],
  exports: [
    HelloWorldComponent,
    CustomPointLightComponent,
  ],
  declarations: [
    HelloWorldComponent,
    CustomPointLightComponent,
  ],
})
export class HelloworldModule { }
