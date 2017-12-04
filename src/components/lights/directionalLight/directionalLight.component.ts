import { Component, OnInit, Input } from '@angular/core';

import { DirectionalLight, DirectionalLightParams } from 'whs';

import { LightComponent } from '../../../core';

@Component({
  selector: 'whs-directional-light',
  template: '<ng-content></ng-content>',
})
export class DirectionalLightComponent extends LightComponent implements OnInit {

  _instance: DirectionalLight;

  @Input() params: DirectionalLightParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new DirectionalLight(this.params);
  }
}
