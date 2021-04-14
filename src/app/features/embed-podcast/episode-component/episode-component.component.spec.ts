import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeComponentComponent } from './episode-component.component';

describe('EpisodeComponentComponent', () => {
  let component: EpisodeComponentComponent;
  let fixture: ComponentFixture<EpisodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
