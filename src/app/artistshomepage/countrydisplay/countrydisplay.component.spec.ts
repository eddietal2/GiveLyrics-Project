import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDisplayComponent } from './countrydisplay.component';

describe('CountryDisplayComponent', () => {
  let component: CountryDisplayComponent;
  let fixture: ComponentFixture<CountryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
