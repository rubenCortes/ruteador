import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloARoutingModule } from './modulo-a-routing.module';
import { ModuloAComponent } from './modulo-a.component';
import { ModAC1Component } from './mod-a-c1/mod-a-c1.component';
import { ModAC2Component } from './mod-a-c2/mod-a-c2.component';

@NgModule({
  imports: [
    CommonModule,
    ModuloARoutingModule
  ],
  declarations: [ModuloAComponent, ModAC1Component, ModAC2Component],
  exports: [ModAC1Component]
})
export class ModuloAModule { }
