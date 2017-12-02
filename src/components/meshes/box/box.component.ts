import { Component, OnInit, Input } from '@angular/core';

import { Box, BoxParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-box',
  template: '<div></div>',
})
export class BoxComponent extends MeshComponent implements OnInit {

  _instance: Box;

  @Input() params: BoxParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Box(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
