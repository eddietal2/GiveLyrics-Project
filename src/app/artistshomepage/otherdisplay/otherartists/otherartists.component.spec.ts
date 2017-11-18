import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherArtistsComponent } from './otherartists.component';

describe('OtherArtistsComponent', () => {
  let component: OtherArtistsComponent;
  let fixture: ComponentFixture<OtherArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
