import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DweleComponent } from './dwele.component';

describe('DweleComponent', () => {
  let component: DweleComponent;
  let fixture: ComponentFixture<DweleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DweleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DweleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
