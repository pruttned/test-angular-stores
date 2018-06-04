import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2MasterComponent } from './module2-master/module2-master.component';

const routes: Routes = [
  {
    path: '',
    component: Module2MasterComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
