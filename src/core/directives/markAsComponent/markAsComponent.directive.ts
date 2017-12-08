import { Directive, QueryList, OnInit, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[whsMarkAsComponent]'
})
export class MarkAsComponentDirective<T> implements OnInit {

  component: T;

  constructor(private _view: ViewContainerRef) {}
  ngOnInit() {
    this.component = (<any>this._view)._data.componentView.component;
  }


}
