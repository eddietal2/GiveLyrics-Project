import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockDisplayComponent } from './rockdisplay.component';

describe('RockDisplayComponent', () => {
  let component: RockDisplayComponent;
  let fixture: ComponentFixture<RockDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
