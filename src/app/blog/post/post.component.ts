import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'bbl-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public items: Array<Post>;
  public id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    this.items = [];
    this.id = this.activatedRoute.snapshot.params['id'];
    this.items = this.firebase.getDB();
  }

  back() {
    this.router.navigate([`blog`]);
  }

}
