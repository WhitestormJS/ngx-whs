import { Component, Host, Optional, OnInit, Input } from '@angular/core';

import { Sphere, SphereParams } from 'whs';

import { ComponentComponent } from '../../../core';


@Component({
  selector: 'whs-sphere',
  template: '<ng-content></ng-content>',
})
export class SphereComponent extends ComponentComponent implements OnInit {
  _instance: Sphere;

  @Input() params: SphereParams;

  ngOnInit() {
    this._instance = new Sphere(this.params);
  }

}
