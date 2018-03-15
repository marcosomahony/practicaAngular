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

  constructor(public db: AngularFireDatabase) {
    this.oItems = [];
    this.oPost = db.list('/posts');
    this.oPost.valueChanges().subscribe(
      value => this._processData(value)
    );
    this.oContacto = db.list('/contactos');
  }

  _processData(data) {
    data.forEach(
      element => {
        const item = new Post(
          element.title,
          element.author,
          element.content,
          element.img
        );
        this.oItems.push(item);
      }
    );
  }

  getDB(): Array<Post> {
    return this.oItems;
  }

  addPost(oPost: Post): void {
    this.oPost.push(oPost);
  }

  getLastIndex() {
    return this.oItems.length;
  }

  addContacto(oContacto: ContactoIf): void {
    this.oContacto.push(oContacto);
  }
}
