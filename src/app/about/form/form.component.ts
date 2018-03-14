import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactoIf } from '../../models/contacto.model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'bbl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datosContacto: ContactoIf;
  showResultados: boolean;
  @ViewChild('formContacto') formulario: any;

  constructor(public firebase: FirebaseService) { }

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
    this.firebase.addContacto(this.datosContacto);
  }

  volver() {
    this.showResultados = false;
    this.inicializarForm();
  }
}
