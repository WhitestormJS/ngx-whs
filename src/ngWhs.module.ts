import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './components';

const COMPONETS = [
  ContainerComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...COMPONETS,
  ],
  exports: [
    ...COMPONETS,
  ]
})
export class NgWhsModuls {}
