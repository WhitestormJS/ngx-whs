import { Injectable } from '@angular/core';

import { Vector3, MeshPhongMaterial } from 'three';
import { appModules, appDefaults, $colors, getBasicLights } from '../global';

import * as WHS from 'whs/build/whs';
import { SphereModule, BoxModule, CompoundModule } from 'physics-module-ammonext';



@Injectable()
export class CubeService {
  controlsModule = new WHS.OrbitControlsModule();
  get containerModules() {
    return [
      ...appModules({
        position: new Vector3(0, 10, 200),
        far: 500,
      }, appDefaults.rendering, appDefaults.physics, false),
      this.controlsModule,
    ];
  }

  get ball() {
    return {
      geometry: {
        radius: 5,
        widthSegments: 32,
        heightSegments: 32
      },
      modules: [
        new SphereModule({
          mass: 10,
          restitution: 3,
          friction: 0
        })
      ],

      material: new MeshPhongMaterial({
        color: $colors.mesh
      }),

      position: [0, 30, 0]
    };
  }

  box =  {
      geometry: {
        width: 100,
        height: 100,
        depth: 100
      },

      modules: [
        new CompoundModule({
          mass: 100
        })
      ],

      material: new MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true
      }),

      position: [0, 0, 0],
      rotation: [0, 0, 25]
  };

  makeBoxWall(attrs = {}, size = 100) {
    return {
      ...attrs,

      geometry: {
        width: size,
        height: size,
        depth: 0
      },

      modules: [
        new BoxModule({
          mass: 0,
          restitution: 3,
          friction: 0
        })
      ],

      material: new MeshPhongMaterial({
        color: 0x447F8B,
        transparent: true,
        opacity: 0.125
      })
    };
  }

  getBoxWalls() {
   return [
      { position: [0, 0, 50] },
      { position: [0, 0, -50] },
      {
        rotation: {x: -Math.PI / 2},
        position: [0, 50, 0]
      },
      {
        rotation: {x: -Math.PI / 2},
        position: [0, -50, 0]
      },
      {
        rotation: {y: -Math.PI / 2},
        position: [50, 0, 0]
      },
      {
        rotation: {y: -Math.PI / 2},
        position: [-50, 0, 0]
      },
    ].map(boxwall => this.makeBoxWall(boxwall));
  }

  boxLoop() {
    const v = new Vector3(0, 0, 1);

    return (box, clock, secen) => {
      box.setAngularVelocity(v);
    };
  }

  get ambientLight() {
    return getBasicLights().ambientLight;
  }

  get pointLight() {
    return getBasicLights().pointLight;
  }

  boxReady(box) {
    box.setLinearFactor(new Vector3(0, 0, 0));
  }

  secenReady() {
    this.controlsModule.controls =  {
        autoRotate: true,
    };
  }
}
