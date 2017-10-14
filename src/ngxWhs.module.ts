import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent, SphereComponent, AmbientLightComponent,
        PointLightComponent, PlaneComponent } from './components';

const COMPONETS = [
  ContainerComponent,
  SphereComponent,
  AmbientLightComponent,
  PointLightComponent,
  PlaneComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...COMPONETS,
  ],
  exports: [
    ...COMPONETS,
  ]
})
export class NgxWhsModule { }
