import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedPodcastView } from './embed-podcast-view.component';

describe('EmbedPodcastView', () => {
  let component: EmbedPodcastView;
  let fixture: ComponentFixture<EmbedPodcastView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmbedPodcastView]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedPodcastView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
