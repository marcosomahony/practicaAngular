import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { FirebaseService } from '../../services/firebase.service';

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

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.sTitulo = '';
    this.sAutor = '';
    this.sImagen = '';
    this.sContenido = '';
  }

  addPost() {
    this.oPost = {title: this.sTitulo, author: this.sAutor, image: this.sImagen, content: this.sContenido};
    const aPost = Array<Post>();
    aPost.push(this.oPost);
    this.firebase.addPost(aPost);
    console.log(this.oPost);
  }



}
