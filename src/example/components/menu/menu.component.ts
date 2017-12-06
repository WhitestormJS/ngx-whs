import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'whs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() menus;

  constructor() { }

  ngOnInit() {
    console.log(this.menus);
  }

}
