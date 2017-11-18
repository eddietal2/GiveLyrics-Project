import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDMArtistTwoComponent } from './edmartisttwo.component';

describe('EDMArtistTwoComponent', () => {
  let component: EDMArtistTwoComponent;
  let fixture: ComponentFixture<EDMArtistTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDMArtistTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDMArtistTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
