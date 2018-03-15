import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';
import { ContactoIf } from '../models/contacto.model';

@Injectable()
export class FirebaseService {

  oItems: Array<Post>;
  oPost: AngularFireList<Post>;
  oContacto: AngularFireList<ContactoIf>;
  postCount: number;

  constructor(private db: AngularFireDatabase) {
    this.oItems = [];
    this.oPost = db.list('/posts');
    this.oContacto = db.list('/contactos');
    this.postCount = 0;
    this.oPost.valueChanges().subscribe(
      value => {
        this.oItems.splice(0, this.oItems.length);
        value.forEach(
          (element, index) => {
            this.oItems.push(
              new Post(
                element.title,
                element.author,
                element.content,
                element.img
              )
            );
          }
        );
      }
    );
  }

  getDB(): Array<Post> {
    return this.oItems;
  }

  addPost(oPost: Post): number {
    this.oPost.push(oPost);
    return this.oItems.length;
  }

  addContacto(oContacto: ContactoIf): void {
    this.oContacto.push(oContacto);
  }
}
