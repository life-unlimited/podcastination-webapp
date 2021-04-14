import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedPodcastComponent } from './embed-podcast.component';

describe('EmbedPodcastComponent', () => {
  let component: EmbedPodcastComponent;
  let fixture: ComponentFixture<EmbedPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedPodcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
