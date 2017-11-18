import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryArtistsOneComponent } from './countryartistsone.component';

describe('CountryArtistsOneComponent', () => {
  let component: CountryArtistsOneComponent;
  let fixture: ComponentFixture<CountryArtistsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryArtistsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryArtistsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
