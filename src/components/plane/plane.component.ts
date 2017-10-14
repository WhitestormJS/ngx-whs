import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { StateService, TYPE_ADDTO } from '../../state';
import { ContainerComponent } from '../container';
import { Plane, PlaneParams } from 'whs';

@Component({
  selector: 'whs-plane',
  templateUrl: './plane.component.html',
  styleUrls: [ './plane.component.scss' ]
})
export class PlaneComponent implements OnInit {
  private _instance;

  @Input() public props: PlaneParams;

  constructor(@Host() @Optional() private state: StateService, @Optional() private container: ContainerComponent ) {
    if (!container) {
      throw new Error('PlaneComponent should be hosted by ContainerComponent');
    }
  }

  initInstance() {
    this._instance = new Plane(this.props);
  }

  ngOnInit() {
    this.initInstance();
    this.state.trigger(TYPE_ADDTO, this._instance);
  }


}
