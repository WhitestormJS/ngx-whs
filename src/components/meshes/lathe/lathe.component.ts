import { Component, OnInit, Input } from '@angular/core';

import { Lathe, LatheParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-lathe',
  template: '<div></div>',
})
export class LatheComponent extends MeshComponent implements OnInit {

  _instance: Lathe;

  @Input() params: LatheParams;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Lathe(this.params);
  }

  buildGeometry() {
    return this._instance.buildGeometry();
  }
}
