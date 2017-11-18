import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDMArtistsComponent } from './edmartists.component';

describe('EDMArtistsComponent', () => {
  let component: EDMArtistsComponent;
  let fixture: ComponentFixture<EDMArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDMArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDMArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
