import { Component, OnInit, Input } from '@angular/core';

import { Icosahedron } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-icosahedron',
  template: '<ng-content></ng-content>',
})
export class IcosahedronComponent extends MeshComponent implements OnInit {

  _instance: Icosahedron;

  @Input() params;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Icosahedron(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
