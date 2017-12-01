import { Component } from '@angular/core';


import {  SceneModule, RenderingModule, ResizeModule, PerspectiveCamera, StateModule, OrbitControlsModule } from 'whs';
import * as WHS from 'whs/build/whs';
import * as THREE from 'three';

@Component({
  selector: 'whs-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: [ './helloworld.component.scss' ],
})
export class HelloWorldComponent {



  containerModules = [
    new SceneModule(),
    new WHS.DefineModule('camera', new PerspectiveCamera({
      position: new THREE.Vector3(0, 10, 50)
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
      color: 0xF2F2F2
    }),
    position: new THREE.Vector3(0, 5, 0),
  };

  ambientLightProps = {
    light: {
      intensity: 0.4
    }
  };

  planeProps = {
    geometry: {
      width: 100,
      height: 100
    },

    material: new THREE.MeshPhongMaterial({color: 0x447F8B}),

    rotation: {
      x: -Math.PI / 2
    }
  };
}

