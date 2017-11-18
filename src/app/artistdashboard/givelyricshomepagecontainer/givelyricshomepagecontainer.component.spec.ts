import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecontainerComponent } from './homepagecontainer.component';

describe('HomepagecontainerComponent', () => {
  let component: HomepagecontainerComponent;
  let fixture: ComponentFixture<HomepagecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
