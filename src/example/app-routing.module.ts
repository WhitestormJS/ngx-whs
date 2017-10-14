import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
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
    children: [
      {
        path: 'helloworld',
        loadChildren: './helloword/helloworld.module.ts#HelloworldModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
