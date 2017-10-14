import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './helloworld.component';


const routers: Routes = [
  {
    path: '',
    component: HelloWorldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class HelloWorldRoutingModule {

}
