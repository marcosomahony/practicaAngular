import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';

@Injectable()
export class FirebaseService {

  oItems: Array<any>;

  constructor(public db: AngularFireDatabase) {
    this.oItems = [];
    db.list('/posts').valueChanges().subscribe(
      value => value.forEach(
        element => {
          this.oItems.push(element);
        }
      )
    );
  }

  getDB() {
    return this.oItems;
  }

  getItem(id: number) {
    return this.oItems[id];
  }

  addPost(oPost: Post) {
    // TO DO
  }

}
