import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuviComponent } from './yuvi.component';

describe('YuviComponent', () => {
  let component: YuviComponent;
  let fixture: ComponentFixture<YuviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
