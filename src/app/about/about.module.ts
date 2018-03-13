import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, FormComponent, CardsComponent]
})
export class AboutModule { }
