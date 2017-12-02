import { Component, OnInit, Input } from '@angular/core';

import { Extrude, ExtrudeParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-extrude',
  template: '<div></div>',
})
export class ExtrudeComponent extends MeshComponent implements OnInit {

  _instance: Extrude;

  @Input() params: ExtrudeParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Extrude(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
