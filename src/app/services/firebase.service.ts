import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';

@Injectable()
export class FirebaseService {

  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/posts').valueChanges();
  }

  getDB() {
    return this.items;
  }

  addPost(oPost: Post) {
    // TO DO
  }

}
