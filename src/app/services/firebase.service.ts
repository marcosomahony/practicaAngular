import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';
import { ContactoIf } from '../models/contacto.model';

@Injectable()
export class FirebaseService {

  oPost: AngularFireList<Post>;
  oContacto: AngularFireList<ContactoIf>;
  postCount: number;

  constructor(public db: AngularFireDatabase) {
    this.oPost = db.list('/posts');
    this.oContacto = db.list('/contactos');
    this.postCount = 0;
  }

  _processData(data: Array<any>): Array<Post> {
    let out: Array<Post>;
    out = [];
    data.forEach(
      element => {
        const item = new Post(
          element.title,
          element.author,
          element.content,
          element.img
        );
        out.push(item);
      }
    );
    this.postCount = out.length;
    return out;
  }

  getDB(): Promise<Array<Post>> {
    return new Promise<Array<Post>>(
      (resolve, reject) =>
        this.oPost.valueChanges().subscribe(
          value => resolve(this._processData(value)),
        )
    );
  }

  addPost(oPost: Post): number {
    this.oPost.push(oPost);
    return this.postCount;
  }

  addContacto(oContacto: ContactoIf): void {
    this.oContacto.push(oContacto);
  }
}
