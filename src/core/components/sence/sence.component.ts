import { Component, ComponentRef, ElementRef, OnInit, Input, OnChanges, AfterViewInit, AfterViewChecked, ViewChild,
  TemplateRef, SkipSelf, Optional, ChangeDetectionStrategy, ViewChildren, QueryList, ContentChildren, AfterContentInit,
  OnDestroy, } from '@angular/core';
import * as THREE from 'three';
import { App, ElementModule, SceneModule, RenderingModule,  Component as WhsComponentNative } from 'whs';

import { StateService, TYPE_ADDTO } from '../../services';

import { ComponentComponent } from '../component';


@Component({
  selector: 'whs-sence',
  template: '<div #instance class="whs-fullScreen"><ng-content></ng-content></div>',
  providers: [ StateService ],
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
export class SenceComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  _instance: App;

  @ViewChild('instance') private instance: ElementRef;

  @ContentChildren('component') components: QueryList<ComponentComponent>;

  @Input() modules = [];

  @Input() id: string;
  constructor(
    private element: ElementRef,
    private state: StateService,
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
    // this.state.on(TYPE_ADDTO, (component: WhsComponentNative ) => {
    //   component.addTo(this._instance);
    // });
  }

  ngAfterContentInit() {
    this.attach();
    this.build();
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.instance.nativeElement.remove();
  }

  private attach() {
    this.components.forEach(component => {
      if (component instanceof ComponentComponent && (component as any !== this)) {
        console.log('secen attach', component);
        this.add(component._instance);
      }
    });
  }
}
