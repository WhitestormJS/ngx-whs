import {
  Component, ElementRef, OnInit, Input, AfterViewInit, AfterViewChecked, ViewChild,
   SkipSelf, Optional, ChangeDetectionStrategy, ViewChildren, QueryList, ContentChildren,
  OnDestroy, EventEmitter, Output
} from '@angular/core';
import * as THREE from 'three';
import { App, ElementModule, SceneModule, RenderingModule, Component as WhsComponentNative } from 'whs';

import { ComponentComponent } from '../component';
import { MarkAsComponentDirective } from '../../directives/markAsComponent';


@Component({
  selector: 'whs-sence',
  template: '<div #instance class="whs-fullScreen"><ng-content></ng-content></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host ::ng-deep .whs-fullScreen {
        height: 100%;
        weight: 100%;
      }
    `
  ]
})
export class SenceComponent implements OnInit, AfterViewInit, OnDestroy {
  _instance: App;

  @ViewChild('instance') private instance: ElementRef;
  @ContentChildren(MarkAsComponentDirective) componentsAsContent: QueryList<MarkAsComponentDirective<ComponentComponent>>;
  @ViewChildren(MarkAsComponentDirective) componentsAsView: QueryList<MarkAsComponentDirective<ComponentComponent>>;

  @Input() modules = [];

  @Input() id: string;
  @Output() ready = new EventEmitter<App>();

  constructor(
    private element: ElementRef,
    @SkipSelf() @Optional() parent: SenceComponent) {
    if (parent) {
      throw new Error('SenceComponent can`t be embedded in SenceComponent');
    }
  }

  private createContainer() {
    this._instance = new App([
      new ElementModule(this.instance.nativeElement),
      ...this.modules,
    ]);
  }

  build() {
    this._instance.start();
  }

  add(component: WhsComponentNative) {
    component.addTo(this._instance);
  }


  ngOnInit() {
    this.createContainer();
  }

  ngAfterViewInit() {
    this.attach();
    this.build();
    this.ready.next(this._instance);
  }

  ngOnDestroy() {
    this.instance.nativeElement.remove();
  }

  private attach() {

    this.componentsAsContent.map(component => component.component)
    .concat(this.componentsAsView.map(component => component.component))
    .forEach((component) => {
      if (component && component instanceof ComponentComponent && (component as any !== this)) {
        console.log('secen attach', component, this);
        this.add(component._instance);
      }
    });
  }
}
