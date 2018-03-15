import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

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

  constructor(
    public firebase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sTitulo = '';
    this.sAutor = '';
    this.sImagen = '';
    this.sContenido = '';
  }

  addPost() {
    this.oPost = { title: this.sTitulo, author: this.sAutor, img: this.sImagen, content: this.sContenido };
    const lastPost = this.firebase.addPost(this.oPost);
    window.location.replace(`blog/post/${lastPost}`);
  }



}
