import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBItemsComponent } from './rbitems.component';

describe('RBItemsComponent', () => {
  let component: RBItemsComponent;
  let fixture: ComponentFixture<RBItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
