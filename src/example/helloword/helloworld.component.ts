import { Component } from '@angular/core';
import { $colors, getBoxPlane, getBasicLights } from '../global';

import {
  SceneModule, RenderingModule, ResizeModule, PerspectiveCamera, StateModule, OrbitControlsModule, TextParams, Text,
  VirtualMouseModule, BoxParams,
} from 'whs';

import * as WHS from 'whs/build/whs';

import * as THREE from 'three';

import { WorldModule, SphereModule, BoxModule, PlaneModule } from 'physics-module-ammonext';



// function resolveFront(path): Promise<Font> {
//   return new Promise(resolve => {
//     (new THREE.FontLoader()).load(path, resolve);
//   });
// }


@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
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
      color: $colors.mesh
    }),
    position: [0, 100, 0]
  };


  planeParams = getBoxPlane();

  pointLightParams = getBasicLights().pointLight;

  ambientLightParams = getBasicLights().ambientLight;

  constructor() {
  }
}

