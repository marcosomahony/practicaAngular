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
  @ViewChild('formContacto') formulario: any;

  constructor() { }

  ngOnInit() {
    this.inicializarForm();
  }

  inicializarForm() {
    this.datosContacto = {
      nombre: '',
      email: '',
      sugerencias: '',
      newsletter: false,
      terminos: false
    };

    console.dir(this.formulario);
  }

  enviarFormContacto() {
    console.log('Datos del Form enviados!');
  }

  borrarFormContacto() {
    this.inicializarForm();
  }
}
