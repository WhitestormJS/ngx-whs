import {
  Component, ElementRef, OnInit, Input, AfterViewInit, AfterViewChecked, ViewChild,
   SkipSelf, Optional, ChangeDetectionStrategy, ViewChildren, QueryList, ContentChildren,
  OnDestroy,
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
  @ContentChildren(MarkAsComponentDirective) components: QueryList<MarkAsComponentDirective<ComponentComponent>>;

  @Input() modules = [];

  @Input() id: string;
  constructor(
    private element: ElementRef,
    @SkipSelf() @Optional() parent: SenceComponent) {
    if (parent) {
      throw new Error('SenceComponent can`t be embedded in SenceComponent');
    }
  }

  private createContainer() {
    console.log(this.modules);
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
  }

  ngOnDestroy() {
    this.instance.nativeElement.remove();
  }

  private attach() {
    this.components
      .map(component => component.component)
      .forEach(component => {
        if (component instanceof ComponentComponent && (component as any !== this)) {
          console.log('secen attach', component);
          this.add(component._instance);
        }
      });
  }
}
