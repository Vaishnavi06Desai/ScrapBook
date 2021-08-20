import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginyuviComponent } from './loginyuvi.component';

describe('LoginyuviComponent', () => {
  let component: LoginyuviComponent;
  let fixture: ComponentFixture<LoginyuviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginyuviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginyuviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
