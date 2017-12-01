import { Component, Input, OnInit } from '@angular/core';

import { MeshComponent as WhsMeshComponent, MeshComponentParams } from 'whs';

import { ComponentComponent } from '../component';

@Component({
  selector: 'whs-mesh',
  templateUrl: './mesh.component.html',
  styleUrls: [ './mesh.component.scss' ],
})
export class MeshComponent extends ComponentComponent implements OnInit {

  @Input() params: MeshComponentParams | object;

  _instance: WhsMeshComponent;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new WhsMeshComponent(this.params, this.defaults, this.instructions);
  }

  build() {
    return this._instance.build();
  }

  wrap() {
    return this._instance.wrap();
  }
}
