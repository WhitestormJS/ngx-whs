import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { Plane, PlaneParams } from 'whs';

import { StateService, TYPE_ADDTO, SenceComponent, ComponentComponent } from '../../../core';


@Component({
  selector: 'whs-plane',
  template: '<ng-content></ng-content>',
})
export class PlaneComponent extends ComponentComponent implements OnInit {

  _instance: Plane;

  @Input() params: PlaneParams = {};

  constructor(@Host() @Optional() private state: StateService, @Optional() private sence: SenceComponent ) {
    super();
    if (!sence) {
      throw new Error('PlaneComponent should be hosted by SenceComponent');
    }
  }

  ngOnInit() {
    this._instance = new Plane(this.params);
  }


}
