import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxWhsModule } from '../../ngxWhs.module';


import { HelloWorldRoutingModule } from './helloworld-routing.module';
import { HelloWorldComponent } from './helloworld.component';

@NgModule({
  imports: [
    CommonModule,
    HelloWorldRoutingModule,
    NgxWhsModule,
  ],
  declarations: [
    HelloWorldComponent
  ],
})
export class HelloworldModule { }
