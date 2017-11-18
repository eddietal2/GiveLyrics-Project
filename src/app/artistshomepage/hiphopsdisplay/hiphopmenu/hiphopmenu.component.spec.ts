import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHopMenuComponent } from './hiphopmenu.component';

describe('HipHopMenuComponent', () => {
  let component: HipHopMenuComponent;
  let fixture: ComponentFixture<HipHopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipHopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
