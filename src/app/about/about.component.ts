import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-about',
  template: `
    <bbl-cards></bbl-cards>
    <bbl-form></bbl-form>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
