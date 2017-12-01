import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { Sphere, SphereParams } from 'whs';

import { StateService, TYPE_ADDTO, SenceComponent, ComponentComponent } from '../../core';


@Component({
  selector: 'whs-sphere',
  template: '<div></div>',
})
export class SphereComponent extends ComponentComponent implements OnInit {
  _instance;

  @Input() public params: SphereParams;

  constructor(@Host() @Optional() private state: StateService, @Optional() private sence: SenceComponent ) {
    super();
    if (!sence) {
      throw new Error('SphereComponent should be hosted by SenceComponent');
    }
  }

  ngOnInit() {
    this._instance = new Sphere(this.params);
    this.sence.add(this._instance);
  }

}
