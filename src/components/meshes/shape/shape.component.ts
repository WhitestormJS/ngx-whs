import { Component, OnInit, Input } from '@angular/core';

import { Shape, ShapeParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-shape',
  template: '<div></div>',
})
export class ShapeComponent extends MeshComponent implements OnInit {

  _instance: Shape;

  @Input() params: ShapeParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Shape(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
