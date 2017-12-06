import { Directive, ViewContainerRef, OnInit, AfterViewInit, AfterContentInit, Inject, Input, Type, SkipSelf,
  Optional } from '@angular/core';

import { ComponentInterface, ComponentInterfaceToken, SenceComponent } from '../../components';

import { Loop, } from 'whs';
import { Clock } from 'three';

@Directive({
  selector: '[whsLoop]'
})
export class LoopDirective implements OnInit, AfterContentInit {

  _loop: Loop;

  @Input() useLock = true;

  @Input() whsLoop: Function = (clock: Clock) => {};

  constructor(
    private _view: ViewContainerRef,
    @Optional() private secen: SenceComponent) {
      if (!secen) {
        throw new Error('Can`t fint secen SenceComponent');
      }
    }

  ngOnInit() {
    console.log('loop create');
    const hostComponent = (<any>this._view)._data.componentView.component;

    this._loop = new Loop((clock) => {
      hostComponent._instance.defer(() => {
        this.whsLoop(hostComponent, clock, this.secen);
      });
    }, this.useLock);
  }

  ngAfterContentInit() {
    this._loop.start(this.secen._instance);
  }




}
