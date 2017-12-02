import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule, SenceComponent, CameraComponent, ComponentComponent, LightComponent, MeshComponent, PROVIDERS } from './core';

import { CubeCameraComponent, OrthographicCameraComponent, PerspectiveCameraComponent,
  AmbientLightComponent, AreaLightComponent, DirectionalLightComponent, HemisphereLightComponent, PointLightComponent, SpotLightComponent,
  PlaneComponent, SphereComponent } from './components';

const COMPONETS = [
  SenceComponent,
  ComponentComponent,

  // camera
  CameraComponent,
  CubeCameraComponent,
  OrthographicCameraComponent,
  PerspectiveCameraComponent,

  // light
  AmbientLightComponent,
  AreaLightComponent,
  DirectionalLightComponent,
  HemisphereLightComponent,
  PointLightComponent,
  SpotLightComponent,

  // mesh
  SphereComponent,
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
