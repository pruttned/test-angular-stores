import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1MasterComponent } from './module1-master/module1-master.component';

const routes: Routes = [
  {
    path: '',
    component: Module1MasterComponent,
  }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
