import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDMDisplayComponent } from './edmdisplay.component';

describe('EDMDisplayComponent', () => {
  let component: EDMDisplayComponent;
  let fixture: ComponentFixture<EDMDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDMDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDMDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
