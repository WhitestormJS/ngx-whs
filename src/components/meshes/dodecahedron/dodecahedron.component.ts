import { Component, OnInit, Input } from '@angular/core';

import { Dodecahedron } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-odecahedron',
  template: '<div></div>',
})
export class DodecahedronComponent extends MeshComponent implements OnInit {

  _instance: Dodecahedron;

  @Input() params;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Dodecahedron(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}