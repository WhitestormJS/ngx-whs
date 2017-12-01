import { Component, Host, Optional, OnInit, Input, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { StateService, TYPE_ADDTO, SenceComponent, LightComponent } from '../../core';
import { AmbientLight, AmbientLightParams } from 'whs';

@Component({
  selector: 'whs-ambient-light',
  templateUrl: './ambientLight.component.html',
  styleUrls: [ './ambientLight.component.scss' ]
})
export class AmbientLightComponent extends LightComponent implements OnInit {

  @Input() params: AmbientLightParams;

  _instance: AmbientLight;

  constructor(
    @Host() @Optional() private state: StateService,
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
