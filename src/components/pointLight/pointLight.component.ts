import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { StateService, TYPE_ADDTO } from '../../state';
import { ContainerComponent } from '../container';
import { PointLight, PointLightParams } from 'whs';

@Component({
  selector: 'whs-point-light',
  templateUrl: './pointLight.component.html',
  styleUrls: [ './pointLight.component.scss' ]
})
export class PointLightComponent implements OnInit {
  private _instance;

  @Input() public props: PointLightParams;

  constructor(@Host() @Optional() private state: StateService, @Optional() private container: ContainerComponent ) {
    if (!container) {
      throw new Error('PointLightComponent should be hosted by ContainerComponent');
    }
  }

  initInstance() {
    this._instance = new PointLight(this.props);
  }

  ngOnInit() {
    this.initInstance();
    this.state.trigger(TYPE_ADDTO, this._instance);
  }


}
