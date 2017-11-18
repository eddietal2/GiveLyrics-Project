import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMenuComponent } from './countrymenu.component';

describe('CountryMenuComponent', () => {
  let component: CountryMenuComponent;
  let fixture: ComponentFixture<CountryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
