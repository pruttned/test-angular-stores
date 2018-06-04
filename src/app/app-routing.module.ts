import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'module2',
    loadChildren: 'app/module2/module2.module#Module2Module',
  },
  {
    path: '',
    loadChildren: 'app/module1/module1.module#Module1Module',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
