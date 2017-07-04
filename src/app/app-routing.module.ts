import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auxiliar1Component } from './auxiliar1/auxiliar1.component';
import { Auxiliar2Component } from './auxiliar2/auxiliar2.component';



const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'aux1/:id1/:id2',
    component: Auxiliar1Component
  },
    {
    path: 'aux2',
    component: Auxiliar2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
