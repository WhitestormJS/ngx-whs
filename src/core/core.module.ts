import { NgModule, ModuleWithProviders, Provider, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenceComponent, LightComponent, ComponentComponent, CameraComponent, MeshComponent, } from './components';

import { StateService } from './services';

import { LoopDirective, MarkAsComponentDirective } from './directives';

export const PROVIDERS: Provider[] = [
  StateService
];

const COMPONENTS = [
  SenceComponent,
  LightComponent,
  ComponentComponent,
  CameraComponent,
  MeshComponent,

  LoopDirective,
  MarkAsComponentDirective,
];

const DIRECTIVES = [];

@NgModule({

  imports: [
    CommonModule,
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
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }
}
