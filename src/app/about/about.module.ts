import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { FirebaseService } from '../services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    FormComponent,
    CardsComponent
  ],
  providers: [
    FirebaseService
  ]
})
export class AboutModule { }
