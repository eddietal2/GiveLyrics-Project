import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryArtistsTwoComponent } from './countryartiststwo.component';

describe('CountryArtistsTwoComponent', () => {
  let component: CountryArtistsTwoComponent;
  let fixture: ComponentFixture<CountryArtistsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryArtistsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryArtistsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
