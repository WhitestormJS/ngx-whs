import { Component, OnInit, Input } from '@angular/core';

import { Cone, ConeParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-cone',
  template: '<ng-content></ng-content>',
})
export class ConeComponent extends MeshComponent implements OnInit {

  _instance: Cone;

  @Input() params: ConeParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Cone(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
