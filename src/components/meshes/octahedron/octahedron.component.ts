import { Component, OnInit, Input } from '@angular/core';

import { Octahedron, OctahedronParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-octahedron',
  template: '<ng-content></ng-content>',
})
export class OctahedronComponent extends MeshComponent implements OnInit {

  _instance: Octahedron;

  @Input() params: OctahedronParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Octahedron(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
