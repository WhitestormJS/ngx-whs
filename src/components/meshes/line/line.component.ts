import { Component, OnInit, Input } from '@angular/core';

import { Line, LineParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-line',
  template: '<div></div>',
})
export class LineComponent extends MeshComponent implements OnInit {

  _instance: Line;

  @Input() params: LineParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Line(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
