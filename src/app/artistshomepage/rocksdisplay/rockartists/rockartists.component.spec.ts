import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockArtistsComponent } from './rockartists.component';

describe('RockArtistsComponent', () => {
  let component: RockArtistsComponent;
  let fixture: ComponentFixture<RockArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
