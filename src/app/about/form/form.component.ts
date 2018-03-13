import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'bbl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // asociada al formulario de contacto
  formContacto: FormGroup;

  // FormBuilder necesario para instanciar el FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formContacto = this.formBuilder.group({
      nombre: '',
      email: '',
      sugerencias: '',
      newsletter: true,
      terminos: false
    });
  }

  enviarFormContacto() {
    console.log('Datos del Form enviados!');
  }

}
