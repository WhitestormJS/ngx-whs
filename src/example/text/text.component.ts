import { Component } from '@angular/core';
import { $colors, getBoxPlane, getBasicLights, appModules } from '../global';

import {
  SceneModule, RenderingModule, ResizeModule, PerspectiveCamera, StateModule, OrbitControlsModule, TextParams, Text,
  VirtualMouseModule, BoxParams
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
  selector: 'app-text',
  templateUrl: './text.component.html',
})
export class TextComponent {

  containerModules = [
    ...appModules({
      position: new THREE.Vector3(0, 10, 200),
      far: 1000,
    }),
  ];

  textParams = {
    text: 'hello ngx-whs',
    font: WHS.Text.load('./assets/gentilis_bold.typeface.json'),
    geometry: {
      size: 20,
      height: 5,
      curveSegments: 6
    },
    material: new THREE.MeshBasicMaterial({
      color: 0xffffff
    }),
    position: [-100, 0, 0]
  };

  controlsModule;
  constructor() {
    this.controlsModule = new WHS.OrbitControlsModule();
    this.containerModules.push(this.controlsModule);
  }
}

