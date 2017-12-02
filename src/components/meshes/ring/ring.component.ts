import { Component, OnInit, Input } from '@angular/core';

import { Ring, RingParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-ring',
  template: '<div></div>',
})
export class RingComponent extends MeshComponent implements OnInit {

  _instance: Ring;

  @Input() params: RingParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Ring(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
