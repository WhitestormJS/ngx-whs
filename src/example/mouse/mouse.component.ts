import { Component } from '@angular/core';

import {
  SceneModule, RenderingModule, ResizeModule, PerspectiveCamera, StateModule, OrbitControlsModule, TextParams, Text,
  VirtualMouseModule, BoxParams,
} from 'whs';

import * as WHS from 'whs/build/whs';

import * as THREE from 'three';

import { WorldModule, SphereModule, BoxModule, PlaneModule } from 'physics-module-ammonext';

import { $colors, getBoxPlane, getBasicLights } from '../global';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html'
})
export class MouseComponent {
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

  mouse;
  constructor() {
    this.mouse = new VirtualMouseModule();
    this.containerModules.push(this.mouse);
  }

  sphereReady(sphere) {
    this.mouse.track(sphere);

    sphere.on('mouseover', () => {
      sphere.material.color.set(0xffff00);
      console.log('mouseover');
    });
    sphere.on('mousemove', () => {
      console.log('mousemove');
    });
    sphere.on('mouseout', () => {
      sphere.material.color.set($colors.mesh);
      console.log('mouseout');
    });
    sphere.on('click', () => {
      alert('click!');
    });
  }
}
