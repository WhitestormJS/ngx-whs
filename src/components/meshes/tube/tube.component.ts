import { Component, OnInit, Input } from '@angular/core';

import { Tube, TubeParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-tube',
  template: '<ng-content></ng-content>',
})
export class TubeComponent extends MeshComponent implements OnInit {

  _instance: Tube;

  @Input() params: TubeParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Tube(this.params);
  }
}
