import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingActivitiesComponent } from './trending-activities.component';

describe('TrendingActivitiesComponent', () => {
  let component: TrendingActivitiesComponent;
  let fixture: ComponentFixture<TrendingActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
