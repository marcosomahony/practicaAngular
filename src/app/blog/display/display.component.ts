import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'bbl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  oItems = Array<any>();

  constructor(
    public firebase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.oItems = [];
    this.oItems = this.firebase.getDB();
  }

  gotoPost(id) {
    this.router.navigate([`blog/post/${id}`]);
  }
}
