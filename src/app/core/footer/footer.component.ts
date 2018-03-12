import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autores: string;
  lugar: string;
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.autores = 'Marcos OMahony, Pablo Psichalis, Beniamins Catalin Santa';
    this.lugar = 'Babel';
    this.fecha = '2018';
  }

}
