import { Component, OnInit, Input } from '@angular/core';

import { HemisphereLight, HemisphereLightParams } from 'whs';

import { LightComponent } from '../../../core';

@Component({
  selector: 'whs-hemisphere-light',
  template: '<ng-content></ng-content>',
})
export class HemisphereLightComponent extends LightComponent implements OnInit {

  _instance: HemisphereLight;

  @Input() params: HemisphereLightParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new HemisphereLight(this.params);
  }
}
