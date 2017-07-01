import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { ModuloAModule } from './modulo-a/modulo-a.module';
import { ModuloBModule } from './modulo-b/modulo-b.module';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { Auxiliar1Component } from './auxiliar1/auxiliar1.component';
import { Auxiliar2Component } from './auxiliar2/auxiliar2.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    Auxiliar1Component,
    Auxiliar2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloAModule,
    ModuloBModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
