import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastView } from './podcast-view.component';

describe('PodcastComponent', () => {
  let component: PodcastView;
  let fixture: ComponentFixture<PodcastView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
