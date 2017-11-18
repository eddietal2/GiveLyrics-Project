import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHopArtistsComponent } from './hiphopartists.component';

describe('HipHopArtistsComponent', () => {
  let component: HipHopArtistsComponent;
  let fixture: ComponentFixture<HipHopArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipHopArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHopArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
