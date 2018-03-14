import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post.model';

@Component({
  selector: 'bbl-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  item: Array<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.item = this.firebase.getItem(id);
    } else {
      this.item = null;
    }
  }

}
