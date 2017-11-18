import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Royceda59Component } from './royceda59.component';

describe('Royceda59Component', () => {
  let component: Royceda59Component;
  let fixture: ComponentFixture<Royceda59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Royceda59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Royceda59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
