import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTwoComponent } from './navbar-two.component';

describe('NavbarTwoComponent', () => {
  let component: NavbarTwoComponent;
  let fixture: ComponentFixture<NavbarTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
