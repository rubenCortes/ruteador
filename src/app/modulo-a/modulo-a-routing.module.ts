import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloAComponent } from './modulo-a.component';
import { ModAC1Component } from './mod-a-c1/mod-a-c1.component';
import { ModAC2Component } from './mod-a-c2/mod-a-c2.component';

const routes: Routes = [
  {
    path: '',
    component: ModuloAComponent,
    children: [
      { path: '', component: ModAC1Component },
      { path: 'cma2', component: ModAC2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ModuloARoutingModule { }
