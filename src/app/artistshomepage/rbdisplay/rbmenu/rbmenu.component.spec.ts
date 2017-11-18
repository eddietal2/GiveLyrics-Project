import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBMenuComponent } from './rbmenu.component';

describe('RBMenuComponent', () => {
  let component: RBMenuComponent;
  let fixture: ComponentFixture<RBMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
