import { Component } from '@angular/core';
import { $colors, getBasicLights, appModules } from '../global';

import { Vector3, Vector2, MeshPhongMaterial, DoubleSide } from 'three';
import { HeightfieldModule, SphereModule } from 'physics-module-ammonext';

const func = (u, v) => {
  return new Vector3(u * 100, Math.sin(u * 10) * 4, v * 100);
};

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
})
export class TerrainComponent {

  containerModules = [
    ...appModules({
      position: new Vector3(0, 10, 100),
      far: 200,
    }),
  ];

  terrainParams = {
    geometry: {
      func,
      slices: 40,
      stacks: 40
    },

    shadow: {
      cast: false
    },

    material: new MeshPhongMaterial({
      color: $colors.mesh,
      side: DoubleSide
    }),

    modules: [
      new HeightfieldModule({
        mass: 0,
        size: new Vector2(40, 40),
        autoAlign: true
      })
    ]
  };

  sphereParams = {
    geometry: {
      radius: 1,
      widthSegments: 32,
      heightSegments: 32
    },
    modules: [
      new SphereModule({
        mass: 2,
        restitution: 1
      })
    ],
    material: new MeshPhongMaterial({
      color: $colors.mesh
    }),
    position: new Vector3(-31, 20, 0) // -30, 120, -40
  };

  pointLightParams = getBasicLights(0.5, [0, 10, 10], 100, {
    bias: 0.0001,
    radius: 2,
    camera: {
      fov: 90
    }
  }).pointLight;

  ambientLightParams = getBasicLights(0.5, [0, 10, 10], 100, {
    bias: 0.0001,
    radius: 2,
    camera: {
      fov: 90
    }
  }).ambientLight;

  constructor() { }

  ready(instance) {
    instance.defer(() => {
      instance.applyModule();
      console.log(instance);
    });
  }
}

