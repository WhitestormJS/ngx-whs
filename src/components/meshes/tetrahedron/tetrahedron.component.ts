import { Component, OnInit, Input } from '@angular/core';

import { Tetrahedron, TetrahedronParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-tetrahedron',
  template: '<div></div>',
})
export class TetrahedronComponent extends MeshComponent implements OnInit {

  _instance: Tetrahedron;

  @Input() params: TetrahedronParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Tetrahedron(this.params);
  }
}
