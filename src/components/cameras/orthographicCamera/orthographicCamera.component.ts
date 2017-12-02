import { Component, OnInit, Input } from '@angular/core';

import { OrthographicCamera, OrthographicCameraParams } from 'whs';

import { CameraComponent } from '../../../core';

@Component({
  selector: 'whs-orthographic-camera',
  template: '<div></div>',
})
export class OrthographicCameraComponent extends CameraComponent implements OnInit {

  _instance: OrthographicCamera;

  @Input() params: OrthographicCameraParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new OrthographicCamera(this.params);
  }
}
