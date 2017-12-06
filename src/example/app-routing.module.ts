import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './helloword';
import { MouseComponent } from './mouse';

export interface Menu {
  content: string;
  icon?: string;
  link: string;
  selected?: boolean;
  children?: Menu[];
}

export const children: Routes = [
  {
    path: 'helloworld',
    component: HelloWorldComponent,
    data: {
      content: 'hello world',
      link: 'helloworld',
      icon: 'anticon anticon-dot-chart'
    }
  },
  {
    path: 'mouse',
    component: MouseComponent,
    data: {
      content: 'mouse',
      link: 'mouse',
      icon: 'anticon anticon-dot-chart'
    }
  }
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'helloworld',
  },
  ...children,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
