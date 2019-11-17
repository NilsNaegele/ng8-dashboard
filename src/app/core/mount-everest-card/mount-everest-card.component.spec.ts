import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountEverestCardComponent } from './mount-everest-card.component';

describe('MountEverestCardComponent', () => {
  let component: MountEverestCardComponent;
  let fixture: ComponentFixture<MountEverestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountEverestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountEverestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
