import { Component, OnInit, Input } from '@angular/core';

import { PerspectiveCamera, PerspectiveCameraParams } from 'whs';

import { CameraComponent } from '../../../core';

@Component({
  selector: 'whs-perspective-camera',
  template: '<div></div>',
})
export class PerspectiveCameraComponent extends CameraComponent implements OnInit {

  _instance: PerspectiveCamera;

  @Input() params: PerspectiveCameraParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new PerspectiveCamera(this.params);
  }
}
