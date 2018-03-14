import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';
import { FormsModule } from '@angular/forms';
import { FirebaseApp } from 'angularfire2';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponent ],
      imports: [FormsModule],
      providers: [FirebaseApp, FirebaseService, AngularFireDatabase]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
