import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-blog',
  template: `
    <bbl-display></bbl-display>
    <bbl-new></bbl-new>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
