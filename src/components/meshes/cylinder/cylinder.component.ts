import { Component, OnInit, Input } from '@angular/core';

import { Cylinder, CylinderParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-cylinder',
  template: '<div></div>',
})
export class CylinderComponent extends MeshComponent implements OnInit {

  _instance: Cylinder;

  @Input() params: CylinderParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Cylinder(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
