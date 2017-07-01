import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloBRoutingModule } from './modulo-b-routing.module';
import { ModuloBComponent } from './modulo-b.component';

import { ModuloAModule } from "../modulo-a/modulo-a.module";

@NgModule({
  imports: [
    ModuloAModule,
    CommonModule,
    ModuloBRoutingModule
  ],
  declarations: [ModuloBComponent]
})
export class ModuloBModule { }
