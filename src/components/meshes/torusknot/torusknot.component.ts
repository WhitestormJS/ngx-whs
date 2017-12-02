import { Component, OnInit, Input } from '@angular/core';

import { Torusknot, TorusknotParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-torusknot',
  template: '<div></div>',
})
export class TorusknotComponent extends MeshComponent implements OnInit {

  _instance: Torusknot;

  @Input() params: TorusknotParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Torusknot(this.params);
  }
}
