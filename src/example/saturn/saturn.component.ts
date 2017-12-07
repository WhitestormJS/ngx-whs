import { Component } from '@angular/core';
import { $colors, getBasicLights, appModules } from '../global';

import { SaturnService } from './saturn.service';

import { Vector3, Vector2, MeshPhongMaterial, PCFSoftShadowMap, FlatShading, MeshStandardMaterial } from 'three';
import { HeightfieldModule, SphereModule } from 'physics-module-ammonext';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.component.html',
  providers: [
    SaturnService,
  ],
})
export class SaturnComponent {

  spaceParams = {
    rotation: {
      z:  Math.PI / 12,
    },
  };


  ambientLightParams = {
    color: 0x663344,
    intensity: 2
  };


  containerModules;
  directionalLightParams;
  planetParams;
  particles;


  constructor(public service: SaturnService) {
    this.containerModules = this.service.containerModules;
    this.planetParams = this.service.planetParams;
    this.directionalLightParams = this.service.directionalLight;
    this.particles = this.service.getParticle();
  }

  ready(instance) {
    instance.defer(() => {
      instance.applyModule();
    });
  }
}

