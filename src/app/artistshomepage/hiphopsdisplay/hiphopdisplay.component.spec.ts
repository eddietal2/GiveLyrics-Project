import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHopDisplayComponent } from './hiphopdisplay.component';

describe('HipHopDisplayComponent', () => {
  let component: HipHopDisplayComponent;
  let fixture: ComponentFixture<HipHopDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipHopDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHopDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
