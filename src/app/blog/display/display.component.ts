import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'bbl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  items: Observable<any[]>;

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.items = this.firebase.getDB();
  }
}
