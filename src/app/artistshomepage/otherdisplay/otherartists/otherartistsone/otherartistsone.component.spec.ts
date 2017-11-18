import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherArtistsOneComponent } from './otherartistsone.component';

describe('OtherArtistsOneComponent', () => {
  let component: OtherArtistsOneComponent;
  let fixture: ComponentFixture<OtherArtistsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherArtistsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherArtistsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
