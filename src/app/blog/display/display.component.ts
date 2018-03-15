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

  oItems = Array<Post>();

  constructor(
    public firebase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.oItems = [];
    this.firebase.getDB().then(
      (response: any) => {
        this.oItems = response;
      }
    );
  }

  gotoPost(id) {
    this.router.navigate([`blog/post/${id}`]);
  }
}
