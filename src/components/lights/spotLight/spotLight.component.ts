import { Component, OnInit, Input } from '@angular/core';

import { SpotLight, SpotLightParams } from 'whs';

import { LightComponent } from '../../../core';

@Component({
  selector: 'whs-spot-light',
  template: '<div></div>',
})
export class SpotLightComponent extends LightComponent implements OnInit {

  _instance: SpotLight;

  @Input() params: SpotLightParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new SpotLight(this.params);
  }
}
