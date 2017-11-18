import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistdashboardComponent } from './artistdashboard.component';

describe('ArtistdashboardComponent', () => {
  let component: ArtistdashboardComponent;
  let fixture: ComponentFixture<ArtistdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
