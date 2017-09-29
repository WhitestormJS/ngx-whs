import { Component, ComponentRef, ElementRef, OnInit, Input, OnChanges } from '@angular/core';
import * as THREE from 'three';
import { App } from 'whs';

import * as ss from 'whs';

import * as WHS from 'whs/build/whs';

console.log(ss, WHS);

@Component({
  selector: 'whs-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnChanges {
  private _container: App;

  @Input() public camera = {
    position: {
      y: 10,
      z: 50
    },
  };

  @Input() public rendering = {
    bgColor: 0x162129,
    renderer: {
      antialias: true,
      shadowmap: {
        type: THREE.PCFSoftShadowMap,
      },
    }
  };

  constructor(private element: ElementRef) {}

  private createContainer() {
    this._container = new App([
      new WHS.ElementModule(this.element.nativeElement),
      new WHS.SceneModule(),
      new WHS.CameraModule({
        position: {
          y: 10,
          z: 50
        }
      }),
      new WHS.RenderingModule(this.rendering, {shadow: true}),
      new WHS.OrbitControlsModule(),
      new WHS.ResizeModule()
    ]);
  }

  public build() {
    // Sphere
    const sphere = new WHS.Sphere({ // Create sphere comonent.
      geometry: {
        radius: 5,
        widthSegments: 32,
        heightSegments: 32
      },

      material: new THREE.MeshPhongMaterial({
        color: 0xF2F2F2
      }),

      position: new THREE.Vector3(0, 5, 0)
    });
    sphere.addTo(this._container);
    // Plane
    new WHS.Plane({
      geometry: {
        width: 100,
        height: 100
      },

      material: new THREE.MeshPhongMaterial({color: 0x447F8B}),

      rotation: {
        x: -Math.PI / 2
      }
    }).addTo(this._container);
    // Lights
    new WHS.PointLight({
      light: {
        intensity: 0.5,
        distance: 100
      },

      shadow: {
        fov: 90
      },

      position: new THREE.Vector3(0, 10, 10)
    }).addTo(this._container);

    new WHS.AmbientLight({
      light: {
        intensity: 0.4
      }
    }).addTo(this._container);

    // Start the app
    this._container.start();
  }
  ngOnInit() {
    console.log(this.element.nativeElement.querySelector('.world'));
    this.createContainer();
    this.build();
  }

  ngOnChanges() {

  }



}
