import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { DisplayComponent } from './display/display.component';
import { NewComponent } from './new/new.component';
import { FirebaseService } from '../services/firebase.service';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    PipesModule
  ],
  declarations: [BlogComponent,
    DisplayComponent,
    NewComponent,
    PostComponent
  ],
  providers: [
    FirebaseService
  ]
})
export class BlogModule { }
