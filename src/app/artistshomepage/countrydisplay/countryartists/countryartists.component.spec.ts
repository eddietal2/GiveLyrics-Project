import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryArtistsComponent } from './countryartists.component';

describe('CountryArtistsComponent', () => {
  let component: CountryArtistsComponent;
  let fixture: ComponentFixture<CountryArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
