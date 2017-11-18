import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsHomepageComponent } from './artistshomepage.component';

describe('ArtistsHomepageComponent', () => {
  let component: ArtistsHomepageComponent;
  let fixture: ComponentFixture<ArtistsHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
