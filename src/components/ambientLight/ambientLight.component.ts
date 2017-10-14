import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { StateService, TYPE_ADDTO } from '../../state';
import { ContainerComponent } from '../container';
import { AmbientLight, AmbientLightParams } from 'whs';

@Component({
  selector: 'whs-ambient-light',
  templateUrl: './ambientLight.component.html',
  styleUrls: [ './ambientLight.component.scss' ]
})
export class AmbientLightComponent implements OnInit {
  private _instance;

  @Input() public props: AmbientLightParams;

  constructor(@Host() @Optional() private state: StateService, @Optional() private container: ContainerComponent ) {
    if (!container) {
      throw new Error('AmbientLightComponent should be hosted by ContainerComponent');
    }
  }

  initInstance() {
    this._instance = new AmbientLight(this.props);
  }

  ngOnInit() {
    this.initInstance();
    this.state.trigger(TYPE_ADDTO, this._instance);
  }


}
