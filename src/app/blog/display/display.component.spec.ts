import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { FirebaseApp } from 'angularfire2';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { TruncarPipe } from '../../pipes/truncar.pipe';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent, TruncarPipe ],
      providers: [FirebaseApp, FirebaseService, AngularFireDatabase]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
