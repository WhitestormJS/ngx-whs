import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { PointLight, PointLightParams } from 'whs';


import { StateService, TYPE_ADDTO, SenceComponent, LightComponent } from '../../../core';

@Component({
  selector: 'whs-point-light',
  template: '<ng-content></ng-content>',
})
export class PointLightComponent extends LightComponent implements OnInit {

  _instance: PointLight;

  @Input() params: PointLightParams;

  constructor(@Host() @Optional() private state: StateService, @Optional() private sence: SenceComponent ) {
    super();
    if (!sence) {
      throw new Error('PointLightComponent should be hosted by SenceComponent');
    }
  }

  ngOnInit() {
    this._instance = new PointLight(this.params);
    console.log(this);
  }


}
