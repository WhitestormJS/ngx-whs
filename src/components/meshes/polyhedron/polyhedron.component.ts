import { Component, OnInit, Input } from '@angular/core';

import { Polyhedron, PolyhedronParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-polyhedron',
  template: '<ng-content></ng-content>',
})
export class PolyhedronComponent extends MeshComponent implements OnInit {

  _instance: Polyhedron;

  @Input() params: PolyhedronParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Polyhedron(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
