import { Component, OnInit, Input } from '@angular/core';

import { CameraComponent as WhsCameraComponent, CameraComponentParams } from 'whs';

import { ComponentComponent } from '../component';

@Component({
  selector: 'whs-camera',
  templateUrl: './camera.component.html',
  styleUrls: [ './camera.component.scss' ],
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
