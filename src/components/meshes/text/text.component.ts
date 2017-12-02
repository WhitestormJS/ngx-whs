import { Component, OnInit, Input } from '@angular/core';

import { Text, TextParams } from 'whs';

import { MeshComponent } from '../../../core';

@Component({
  selector: 'whs-text',
  template: '<div></div>',
})
export class TextComponent extends MeshComponent implements OnInit {

  _instance: Text;

  @Input() params: TextParams = {};

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new Text(this.params);
  }
}
