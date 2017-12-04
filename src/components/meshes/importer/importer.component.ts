import { Component, OnInit, Input } from '@angular/core';

import { Importer } from 'whs';

import { MeshComponent } from '../../../core';

// confusing
@Component({
  selector: 'whs-importer',
  template: '<ng-content></ng-content>',
})
export class ImporterComponent extends MeshComponent implements OnInit {

  _instance: Importer;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Importer();
  }
}
