import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherArtistsTwoComponent } from './otherartisttwo.component';

describe('OtherArtistsTwoComponent', () => {
  let component: OtherArtistsTwoComponent;
  let fixture: ComponentFixture<OtherArtistsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherArtistsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherArtistsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
