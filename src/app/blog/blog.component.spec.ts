import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { NewComponent } from './new/new.component';
import { PostComponent } from './post/post.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { TruncarPipe } from '../pipes/truncar.pipe';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent,
      NewComponent,
      PostComponent,
      DisplayComponent,
      TruncarPipe
      ],
      imports: [FormsModule],
      providers: [FirebaseService, AngularFireDatabase, FirebaseApp]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
