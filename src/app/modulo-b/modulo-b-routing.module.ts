import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloBComponent } from './modulo-b.component';

const routes: Routes = [
  {
    path: 'c_m_b',
    component: ModuloBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ModuloBRoutingModule { }
