import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auxiliar1',
  templateUrl: './auxiliar1.component.html',
  styleUrls: ['./auxiliar1.component.css']
})
export class Auxiliar1Component implements OnInit {

  @Input() mensaje: string;
  constructor() { }

  ngOnInit() {
  }

}
