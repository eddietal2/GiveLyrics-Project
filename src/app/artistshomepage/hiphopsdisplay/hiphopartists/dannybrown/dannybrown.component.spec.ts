import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DannyBrownTwoComponent } from './dannybrown.component';

describe('DannyBrownTwoComponent', () => {
  let component: DannyBrownTwoComponent;
  let fixture: ComponentFixture<DannyBrownTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DannyBrownTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DannyBrownTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
