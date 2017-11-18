import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDMMenuComponent } from './edmmenu.component';

describe('EDMMenuComponent', () => {
  let component: EDMMenuComponent;
  let fixture: ComponentFixture<EDMMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDMMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDMMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
