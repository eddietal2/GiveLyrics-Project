import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBDisplayComponent } from './rbdisplay.component';

describe('ArtistsdisplayComponent', () => {
  let component: RBDisplayComponent;
  let fixture: ComponentFixture<RBDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
