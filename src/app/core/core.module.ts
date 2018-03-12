import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
