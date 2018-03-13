import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { Personas } from '../../models/persona.data';

@Component({
  selector: 'bbl-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public aPersonas: Array<Persona>;

  constructor() { }

  ngOnInit() {
    this.aPersonas = Personas;
  }

}
