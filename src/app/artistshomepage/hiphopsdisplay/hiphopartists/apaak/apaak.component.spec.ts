import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APaakComponent } from './apaak.component';

describe('APaakComponent', () => {
  let component: APaakComponent;
  let fixture: ComponentFixture<APaakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APaakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APaakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
