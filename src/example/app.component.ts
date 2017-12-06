import { Component } from '@angular/core';

import { children, Menu } from './app-routing.module';

@Component({
  selector: 'whs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;

  menus: Menu[];

  constructor() {
    this.menus = children.map(item => item.data) as Menu[];
  }

}
