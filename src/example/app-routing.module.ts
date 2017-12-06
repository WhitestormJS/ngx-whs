import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HelloWorldComponent } from './helloword';

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
      link: '/example/helloworld',
      icon: 'anticon anticon-dot-chart'
    }
  }
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example/helloworld',
  },
  {
    path: '**',
    redirectTo: 'example/helloworld',
  },
  {
    path: 'example',
    children,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
