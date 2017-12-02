import { Component } from '@angular/core';


import {  SceneModule, RenderingModule, ResizeModule, PerspectiveCamera, StateModule, OrbitControlsModule, TextParams, Text, } from 'whs';
import * as WHS from 'whs/build/whs';
import * as THREE from 'three';
import { WorldModule, SphereModule, BoxModule } from 'physics-module-ammonext';

import { Font } from 'three';

function resolveFront(path): Promise<Font> {
  return new Promise(resolve => {
    (new THREE.FontLoader()).load(path, resolve);
  });
}


@Component({
  selector: 'whs-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: [ './helloworld.component.scss' ],
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
    new OrbitControlsModule(),
    new ResizeModule(), // Make it resizable.
    new StateModule()
  ];

  sphereProps = {
    geometry: {
      radius: 5,
      widthSegments: 32,
      heightSegments: 32
    },
    material: new THREE.MeshPhongMaterial({
      color: 0xEFEFEF
    }),
    modules: [
      new SphereModule({
        mass: 10,
        restitution: 1
      }),
    ],
    position: [0, 6, 0],
  };

  ambientLightProps = {
    light: {
      intensity: 0.5
    }
  };

  planeProps = {
    geometry: {
      width: 100,
      height: 100,
      depth: 1,
    },

    material: new THREE.MeshPhongMaterial({color: 0x447F8B}),

    modules: [
      new BoxModule({
        mass: 0
      })
    ],

    rotation: {
      x: -Math.PI / 2
    },
    shadow: {
      receive: true,
      cast: false,
    }
  };


  textPrams: TextParams = {
    font: resolveFront('http://site.local.com:8080/assets/gentilis_bold.typeface.json'),
    geometry: {
      size: 5,
      height: 3,
      curveSegments: 6
    },
    material: new THREE.MeshPhongMaterial({
      color: 0x3B8FFB
    }),
    position: {
      x: -18,
      y: 15,
      z: 10,
    },
    rotation: {
      x: -Math.PI / 9
    },
    shadow: {
      cast: true,
      receive: false,
    }
  };
}

