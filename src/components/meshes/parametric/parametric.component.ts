import { Component, OnInit, Input } from '@angular/core';

import { Parametric, ParametricParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-parametric',
  template: '<div></div>',
})
export class ParametricComponent extends MeshComponent implements OnInit {

  _instance: Parametric;

  @Input() params: ParametricParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Parametric(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
