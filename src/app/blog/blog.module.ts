import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { DisplayComponent } from './display/display.component';
import { NewComponent } from './new/new.component';
import { FirebaseService } from '../services/firebase.service';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
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
