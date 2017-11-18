import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockArtistOneComponent } from './rockartistone.component';

describe('RockArtistOneComponent', () => {
  let component: RockArtistOneComponent;
  let fixture: ComponentFixture<RockArtistOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockArtistOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockArtistOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
