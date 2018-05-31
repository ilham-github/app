import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfileComponent } from './userfile.component';

describe('UserfileComponent', () => {
  let component: UserfileComponent;
  let fixture: ComponentFixture<UserfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
