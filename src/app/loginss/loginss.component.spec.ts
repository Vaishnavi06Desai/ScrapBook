import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginssComponent } from './loginss.component';

describe('LoginssComponent', () => {
  let component: LoginssComponent;
  let fixture: ComponentFixture<LoginssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
