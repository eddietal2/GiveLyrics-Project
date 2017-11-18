import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDMArtistOneComponent } from './edmartistone.component';

describe('EDMArtistOneComponent', () => {
  let component: EDMArtistOneComponent;
  let fixture: ComponentFixture<EDMArtistOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDMArtistOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDMArtistOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
