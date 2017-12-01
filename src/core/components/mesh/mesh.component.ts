import { Component, Input, OnInit } from '@angular/core';

import { MeshComponent as WhsMeshComponent, MeshComponentParams, CompositionError } from 'whs';
import { Object3D, Mesh } from 'three';

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

  build(): CompositionError | Mesh |  Promise<Mesh> | Object3D {
    return this._instance.build();
  }

  wrap() {
    return this._instance.wrap();
  }
}
