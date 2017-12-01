import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule, SenceComponent } from './core';

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
  ]
})
export class NgxWhsModule { }
