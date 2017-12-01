import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenceComponent, LightComponent, ComponentComponent, CameraComponent, MeshComponent } from './components';

import { StateService } from './services';

const PROVIDERS = [
  StateService,
];

const COMPONENTS = [
  SenceComponent,
  LightComponent,
  ComponentComponent,
  CameraComponent,
  MeshComponent,
];

const DIRECTIVES = [];

@NgModule({

  imports: [
    CommonModule,
  ],

  providers: [
    ...PROVIDERS,
  ],

  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],

  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ]

})
export class CoreModule { }
