import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcewearvezzoComponent } from './icewearvezzo.component';

describe('IcewearvezzoComponent', () => {
  let component: IcewearvezzoComponent;
  let fixture: ComponentFixture<IcewearvezzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcewearvezzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcewearvezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
