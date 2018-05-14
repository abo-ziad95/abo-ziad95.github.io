import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmarComponent } from './ammar.component';

describe('AmmarComponent', () => {
  let component: AmmarComponent;
  let fixture: ComponentFixture<AmmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
