import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDisplayComponent } from './otherdisplay.component';

describe('OtherDisplayComponent', () => {
  let component: OtherDisplayComponent;
  let fixture: ComponentFixture<OtherDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
