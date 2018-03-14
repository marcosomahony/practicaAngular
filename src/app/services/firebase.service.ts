import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';
import { ContactoIf } from '../models/contacto.model';

@Injectable()
export class FirebaseService {

  oItems: Array<any>;
  oPost: AngularFireList<Post>;
  oContacto: AngularFireList<ContactoIf>;

  constructor(public db: AngularFireDatabase) {
    this.oItems = [];
    db.list('/posts').valueChanges().subscribe(
      value => value.forEach(
        element => {
          this.oItems.push(element);
        }
      )
    );
    this.oPost = db.list('/posts');
    this.oContacto = db.list('/contactos');
  }

  getDB() {
    return this.oItems;
  }

  getItem(id: number) {
    return this.oItems[id];
  }

  addPost(oPost: Post): void {
    this.oPost.push(oPost);
  }

  addContacto(oContacto: ContactoIf): void {
    this.oContacto.push(oContacto);
  }

}
