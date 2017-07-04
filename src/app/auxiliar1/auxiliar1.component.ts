import { Component, OnInit, Input } from '@angular/core';
import { ParamMap, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-auxiliar1',
  templateUrl: './auxiliar1.component.html',
  styleUrls: ['./auxiliar1.component.css']
})
export class Auxiliar1Component implements OnInit {

  @Input() mensaje: string;
  constructor(
    private ruta: ActivatedRoute,
    private locacion: Location
  ) { }

  ngOnInit() {

      let observador: Observer<ParamMap> = {
      next: (parametros: ParamMap) => this.mensaje = parametros.get('id1'),
      error: error => null,
      complete: () => null
    };
    this.ruta.paramMap.subscribe(observador);
  
  }

  eventoClick():string{
    return "Mensaje de componente 1";
  }

}
