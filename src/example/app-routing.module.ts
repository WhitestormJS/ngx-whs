import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './helloword';
import { MouseComponent } from './mouse';
import { TextComponent } from './text';
import { TerrainComponent } from './terrain';
import { SaturnComponent } from './saturn';
import { CubeComponent } from './cube';

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
      content: 'basic/helloworld',
      link: 'helloworld',
      icon: 'anticon anticon-dot-chart'
    }
  },
  {
    path: 'mouse',
    component: MouseComponent,
    data: {
      content: 'basic/mouse',
      link: 'mouse',
      icon: 'anticon anticon-dot-chart'
    }
  },
  {
    path: 'text',
    component: TextComponent,
    data: {
      content: 'basic/text',
      link: 'text',
      icon: 'anticon anticon-dot-chart'
    }
  },
  {
    path: 'saturn',
    component: SaturnComponent,
    data: {
      content: 'basic/saturn',
      link: 'saturn',
      icon: 'anticon anticon-dot-chart'
    }
  },
  {
    path: 'terrain',
    component: TerrainComponent,
    data: {
      content: 'basic/terrain',
      link: 'terrain',
      icon: 'anticon anticon-dot-chart'
    }
  },
  {
    path: 'cube',
    component: CubeComponent,
    data: {
      content: 'basic/cube',
      link: 'cube',
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
  {
    path: '**',
    redirectTo: 'helloworld'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
