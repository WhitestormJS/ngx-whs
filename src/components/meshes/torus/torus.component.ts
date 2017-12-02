import { Component, OnInit, Input } from '@angular/core';

import { Torus, TorusParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-torus',
  template: '<div></div>',
})
export class TorusComponent extends MeshComponent implements OnInit {

  _instance: Torus;

  @Input() params: TorusParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Torus(this.params);
  }
}
