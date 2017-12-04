import { NgModule, ModuleWithProviders, Provider, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenceComponent, LightComponent, ComponentComponent, CameraComponent, MeshComponent,
  ComponentInterface, ComponentInterfaceToken } from './components';

import { StateService } from './services';

import { LoopDirective } from './directives';

export const PROVIDERS: Provider[] = [
  StateService,
  {
    provide: ComponentInterfaceToken,
    useExisting: forwardRef(() => ComponentComponent),
  }
];

const COMPONENTS = [
  SenceComponent,
  LightComponent,
  ComponentComponent,
  CameraComponent,
  MeshComponent,

  LoopDirective,
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
