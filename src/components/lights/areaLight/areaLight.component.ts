import { Component, OnInit, Input } from '@angular/core';

import { AreaLight, AreaLightParams } from 'whs';

import { LightComponent } from '../../../core';

@Component({
  selector: 'whs-area-light',
  template: '<ng-content></ng-content>',
})
export class AreaLightComponent extends LightComponent implements OnInit {

  _instance: AreaLight;

  @Input() params: AreaLightParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new AreaLight(this.params);
  }
}
