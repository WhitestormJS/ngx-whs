import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenceComponent, LightComponent, ComponentComponent, CameraComponent, MeshComponent } from './components';

import { StateService } from './services';

export const PROVIDERS = [
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
