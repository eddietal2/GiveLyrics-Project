import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistnavComponent } from './artistnav.component';

describe('ArtistnavComponent', () => {
  let component: ArtistnavComponent;
  let fixture: ComponentFixture<ArtistnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
