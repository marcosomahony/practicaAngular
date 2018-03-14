import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactoIf } from '../../models/contacto.model';

@Component({
  selector: 'bbl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datosContacto: ContactoIf;
  showResultados: boolean;
  @ViewChild('formContacto') formulario: any;

  constructor() { }

  ngOnInit() {
    this.inicializarForm();
    this.showResultados = false;
  }

  inicializarForm() {
    this.datosContacto = {
      nombre: '',
      email: '',
      sugerencias: '',
      newsletter: true,
      terminos: false
    };
  }

  enviarFormContacto() {
    console.log('Datos del Form enviados!');
  }

  borrarFormContacto() {
    this.inicializarForm();
  }

  imprimirResultado() {
    this.showResultados = true;
  }

  volver() {
    this.showResultados = false;
    this.inicializarForm();
  }
}
