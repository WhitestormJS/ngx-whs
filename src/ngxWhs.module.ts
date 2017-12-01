import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule, SenceComponent, PROVIDERS } from './core';

import { SphereComponent, AmbientLightComponent,
        PointLightComponent, PlaneComponent } from './components';

const COMPONETS = [
  SphereComponent,
  AmbientLightComponent,
  PointLightComponent,
  PlaneComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    ...COMPONETS,
  ],
  exports: [
    ...COMPONETS,

    SenceComponent,
  ],
})
export class NgxWhsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxWhsModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }
}

export * from './components';
export * from './core';
