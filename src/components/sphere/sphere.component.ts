import { Component, Host, Optional, OnInit, Input } from '@angular/core';
import { StateService, TYPE_ADDTO } from '../../state';
import { ContainerComponent } from '../container';

import { Sphere, SphereParams } from 'whs';

@Component({
  selector: 'whs-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: [ './sphere.component.scss' ],
})
export class SphereComponent implements OnInit {
  private _instance;

  @Input() public props: SphereParams;


  constructor(@Host() @Optional() private state: StateService, @Optional() private container: ContainerComponent ) {
    if (!container) {
      throw new Error('SphereComponent should be hosted by ContainerComponent');
    }
  }

  initInstance() {
    if (this.props) {
      this._instance = new Sphere(this.props);
    } else {
      this._instance = new Sphere();
    }
  }

  ngOnInit() {
    this.initInstance();
    this.state.trigger(TYPE_ADDTO, this._instance);
  }

}
