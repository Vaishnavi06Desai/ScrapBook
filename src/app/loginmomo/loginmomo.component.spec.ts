import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmomoComponent } from './loginmomo.component';

describe('LoginmomoComponent', () => {
  let component: LoginmomoComponent;
  let fixture: ComponentFixture<LoginmomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
