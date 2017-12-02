import { Component, OnInit, Input } from '@angular/core';

import { CubeCamera, CubeCameraParams } from 'whs';

import { CameraComponent } from '../../../core';


@Component({
  selector: 'whs-cube-camera',
  template: '<div></div>',
})
export class CubeCameraComponent extends CameraComponent implements OnInit {

  _instance: CubeCamera;

  @Input() params: CubeCameraParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new CubeCamera(this.params);
  }
}
