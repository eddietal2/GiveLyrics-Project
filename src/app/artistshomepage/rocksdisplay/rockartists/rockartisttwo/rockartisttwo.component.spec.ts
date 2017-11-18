import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockArtistTwoComponent } from './rockartisttwo.component';

describe('RockArtistTwoComponent', () => {
  let component: RockArtistTwoComponent;
  let fixture: ComponentFixture<RockArtistTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockArtistTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockArtistTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
