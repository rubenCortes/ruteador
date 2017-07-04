import { Component } from '@angular/core';
import { Auxiliar1Component } from "./auxiliar1/auxiliar1.component";

import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild(Auxiliar1Component)
  private componenteUno: Auxiliar1Component;

  title = 'Prebas de uso de ruteo';
  mensajeInterno: string;



}
