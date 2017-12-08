import {
  Component, Input, OnInit, QueryList, ViewChildren, AfterViewInit, AfterContentInit, ContentChildren,
  EventEmitter, Output,
} from '@angular/core';

import { Component as WhsComponent, App } from 'whs';
import { SenceComponent } from '../sence';
import { MarkAsComponentDirective } from '../../directives/markAsComponent';

@Component({
  selector: 'whs-component',
  template: '<ng-content></ng-content>',
})
export class ComponentComponent implements OnInit, AfterViewInit {
  @Input() params: object;
  @Input() defaults: object;
  @Input() instructions: object;

  _instance: WhsComponent;

  @Output() ready = new EventEmitter<WhsComponent>();

  @ContentChildren(MarkAsComponentDirective) componentsAsContent: QueryList<MarkAsComponentDirective<ComponentComponent>>;
  @ViewChildren(MarkAsComponentDirective) componentsAsView: QueryList<MarkAsComponentDirective<ComponentComponent>>;

  constructor() {
  }

  ngOnInit() {
    this._instance = new WhsComponent(this.params, this.defaults, this.instructions);
  }

  ngAfterViewInit() {
    this.attach();
    this.ready.emit(this._instance);
  }

  private attach() {
    this.componentsAsContent.map(component => component.component)
      .concat(this.componentsAsView.map(component => component.component))
      .forEach((component) => {
        console.log('-----', component);
        if (component && component instanceof ComponentComponent && ((component as any) !== this)) {
          console.log('attach', component, this);
          this.add(component);
        }
      });
  }

  add(obj: ComponentComponent): Promise<WhsComponent> {
    return this._instance.add(obj._instance);
  }

  addTo(parent: ComponentComponent | SenceComponent): Promise<WhsComponent> {
    return this._instance.addTo(parent._instance);
  }

  remove(obj: ComponentComponent): void {
    return this._instance.remove(obj._instance);
  }

  updateParams(params: object): object {
    return this._instance.updateParams(params);
  }

  clone(): WhsComponent {
    return this._instance.clone();
  }

  wait() {

  }

  defer() {

  }

  copy(source: WhsComponent, customize?: Function): WhsComponent {
    return this._instance.copy(source, customize);
  }



}
