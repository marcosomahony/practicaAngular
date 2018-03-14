import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';

@Injectable()
export class FirebaseService {

  items: Observable<any[]>;
  public posts: AngularFireList<Post[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/posts').valueChanges();
    this.posts = db.list('/posts');
  }

  getDB() {
    return this.items;
  }

  addPost(oPost: Post[]): void {
    this.posts.push(oPost);
  }

}
