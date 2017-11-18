import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockMenuComponent } from './rockmenu.component';

describe('RockMenuComponent', () => {
  let component: RockMenuComponent;
  let fixture: ComponentFixture<RockMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
