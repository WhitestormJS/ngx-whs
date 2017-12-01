import { Component, Input, OnInit } from '@angular/core';

import { LightComponent as WhsLightComponent, LightComponentParams, CompositionError } from 'whs';

import { ComponentComponent } from '../component';

@Component({
  selector: 'whs-light',
  template: '<div></div>',
})
export class LightComponent extends ComponentComponent implements OnInit {
  @Input() params: LightComponentParams | object;

  _instance: WhsLightComponent;

  constructor() {
    super();
  }

  ngOnInit() {
    this._instance = new WhsLightComponent(this.params, this.defaults, this.instructions);
  }

  build(): CompositionError | WhsLightComponent {
    return this._instance.build();
  }

  wrap() {
    return this._instance.wrap();
  }

  wrapShadow() {
    return this._instance.wrapShadow();
  }
}
