import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'bbl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  oItems = Array<Post>();

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.oItems = [];
    this.oItems = this.firebase.getDB();
    console.log(this.oItems);
  }
}
