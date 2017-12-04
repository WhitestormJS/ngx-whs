import { Component, Host, Optional, OnInit, Input, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { SenceComponent, LightComponent } from '../../../core';
import { AmbientLight, AmbientLightParams } from 'whs';

@Component({
  selector: 'whs-ambient-light',
  template: '<ng-content></ng-content>',
})
export class AmbientLightComponent extends LightComponent implements OnInit {

  @Input() params: AmbientLightParams;

  _instance: AmbientLight;

  constructor(
    @Optional() private sence: SenceComponent,
    ) {
    super();
    if (!sence) {
      throw new Error('AmbientLightComponent should be hosted by SenceComponent');
    }
  }

  ngOnInit() {
    this._instance = new AmbientLight(this.params);
  }


}
