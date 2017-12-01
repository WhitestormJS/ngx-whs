import { Component } from '@angular/core';

import { PointLightComponent } from '../../../components';

import * as THREE from 'three';

@Component({
  selector: 'app-point-light',
  templateUrl: './customPointLight.html',
})
export class CustomPointLightComponent extends PointLightComponent {

  params =  {
    light: {
      intensity: 0.5,
      distance: 100
    },

    camera: {
      fov: 90
    },

    position: new THREE.Vector3(0, 10, 10)
  };
}
