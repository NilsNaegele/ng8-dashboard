import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageTopComponent } from './base-page-top.component';

describe('BasePageTopComponent', () => {
  let component: BasePageTopComponent;
  let fixture: ComponentFixture<BasePageTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePageTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
