import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'bbl-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  sTitulo: string;
  sAutor: string;
  sImagen: string;
  sContenido: string;
  oPost: Post;
  constructor() { }

  ngOnInit() {
    this.sTitulo = '';
    this.sAutor = '';
    this.sImagen = '';
    this.sContenido = '';
  }

  addPost() {
    this.oPost = {titulo: this.sTitulo, autor: this.sAutor, imagen: this.sImagen, contenido: this.sContenido};
    console.log(this.oPost);
  }

}
