import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';

@Injectable()
export class FirebaseService {

  oItems: Array<Post>;
  oPost: AngularFireList<Post>;

  constructor(public db: AngularFireDatabase) {
    this.oItems = [];
    this.oPost = db.list('/posts');
    this.oPost.valueChanges().subscribe(
      value => value.forEach(
        element => {
          this.oItems.push(new Post(
            element.title,
            element.author,
            element.content,
            element.img)
          );
        }
      )
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

}
