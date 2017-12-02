import { Component, OnInit, Input } from '@angular/core';

import { CameraComponent as WhsCameraComponent, CameraComponentParams, CompositionError } from 'whs';
import { Object3D } from 'three';

import { ComponentComponent } from '../component';

@Component({
  selector: 'whs-camera',
  template: '<div></div>',
})
export class CameraComponent extends ComponentComponent implements OnInit {

  @Input() params: CameraComponentParams | object;

  _instance: WhsCameraComponent;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new WhsCameraComponent(this.params, this.defaults, this.instructions);
  }

  build() {
    return this._instance.build();
  }

  wrap() {
    return this._instance.wrap();
  }



}
