import { Component, OnInit, Input } from '@angular/core';

import { Parametric, ParametricParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-parametric',
  template: '<ng-content></ng-content>',
})
export class ParametricComponent extends MeshComponent implements OnInit {

  _instance: Parametric;

  @Input() params: ParametricParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    // debugger;
    this._instance = new Parametric(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
