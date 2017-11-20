import { Component, ComponentRef, ElementRef, OnInit, Input, OnChanges, AfterViewInit, AfterContentInit, ViewChild,
    TemplateRef } from '@angular/core';
import * as THREE from 'three';
import { App } from 'whs';

import { StateService, TYPE_ADDTO } from '../../state';

import { ElementModule, SceneModule, RenderingModule,  Component as WhsComponent} from 'whs';


@Component({
  selector: 'whs-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [ StateService ]
})
export class ContainerComponent implements OnInit, OnChanges, AfterViewInit {
  private _container: App;

  @ViewChild('instance') private instance: ElementRef;

  @Input() public modules = [];

  @Input() id: string;
  constructor(private element: ElementRef,
              private state: StateService) {}

  private createContainer() {
    this._container = new App([
      new ElementModule(this.instance.nativeElement),
      ...this.modules,
    ]);
  }

  public build() {
    this._container.start();
  }

  ngOnInit() {
    this.createContainer();
    this.state.on(TYPE_ADDTO, (component: WhsComponent) => {
      component.addTo(this._container);
    });

    console.log(this.instance);
  }

  ngOnChanges() {
    console.log('change');
  }

  ngAfterViewInit() {
    this.build();
  }

}
