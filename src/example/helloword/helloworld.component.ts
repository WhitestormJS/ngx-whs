import { Component } from '@angular/core';


import {
  SceneModule, RenderingModule, ResizeModule, PerspectiveCamera, StateModule, OrbitControlsModule, TextParams, Text,
  VirtualMouseModule, BoxParams,
} from 'whs';

import * as WHS from 'whs/build/whs';

import DragModule from 'whs/modules/DragModule';
import * as THREE from 'three';

import { WorldModule, SphereModule, BoxModule, PlaneModule } from 'physics-module-ammonext';

import { Font } from 'three';


function resolveFront(path): Promise<Font> {
  return new Promise(resolve => {
    (new THREE.FontLoader()).load(path, resolve);
  });
}


@Component({
  selector: 'whs-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss'],
})
export class HelloWorldComponent {

  containerModules = [
    new SceneModule(),
    new WHS.DefineModule('camera', new PerspectiveCamera({
      position: new THREE.Vector3(0, 10, 50),
      far: 1000,
    })),
    new RenderingModule({
      bgColor: 0x162129,
      renderer: {
        antialias: true,
        shadowmap: {
          type: THREE.PCFSoftShadowMap,
        },
      }
    }, { shadow: true }), // Apply THREE.WebGLRenderer
    new WorldModule({
      ammo: 'https://whs-dev.surge.sh/examples/assets/ammo.js',
    }),
    new OrbitControlsModule(),
    new ResizeModule(), // Make it resizable.
  ];

  sphereParams = { // Create sphere component.
    geometry: {
      radius: 3,
      widthSegments: 32,
      heightSegments: 32
    },

    modules: [
      new SphereModule({
        mass: 10
      })
    ],

    material: new THREE.MeshPhongMaterial({
      color: 0xF2F2F2
    }),
    position: [0, 100, 0]
  };


  planeParams = {
    geometry: {
      width: 100,
      height: 100
    },

    modules: [
      new PlaneModule({
        mass: 0
      })
    ],

    material: new THREE.MeshPhongMaterial({ color: 0x447F8B }),

    rotation: {
      x: -Math.PI / 2
    }
  };

  pointLightParams = {
    intensity: 0.5,
    distance: 100,

    shadow: Object.assign({
      fov: 90
    }),

    position: [0, 10, 10]
  };

  constructor() {
    this.mouse = new VirtualMouseModule();
    this.containerModules.push(this.mouse);
  }
}

