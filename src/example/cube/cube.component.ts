import { Component } from '@angular/core';

import { CubeService } from './cube.service';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  providers: [
    CubeService,
  ],
})
export class CubeComponent {

  containerModules;
  ambientLight;
  pointLight;
  ball;
  box;
  boxWalls;

  constructor(public service: CubeService) {
    this.containerModules = service.containerModules;
    this.ambientLight = service.ambientLight;
    this.pointLight = service.pointLight;
    this.ball = service.ball;
    this.box = service.box;
    this.boxWalls = service.getBoxWalls();

  }
}
