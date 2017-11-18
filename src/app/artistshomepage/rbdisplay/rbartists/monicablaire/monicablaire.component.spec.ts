import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonicablaireComponent } from './monicablaire.component';

describe('MonicablaireComponent', () => {
  let component: MonicablaireComponent;
  let fixture: ComponentFixture<MonicablaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonicablaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonicablaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
