import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  show: boolean;
  constructor() { }

  ngOnInit() {
    this.show = false;
  }

  replegar() {
    this.show = !this.show;
  }

}
