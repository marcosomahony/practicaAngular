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
    this.autores = 'Marcos O\'Mahony, Pablo Psichalis, Beniamin Catalin Santa';
    this.lugar = 'Babel';
    this.fecha = '2018';
  }

}
