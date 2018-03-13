import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bbl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/posts').valueChanges();
  }

  ngOnInit() {
  }

}
