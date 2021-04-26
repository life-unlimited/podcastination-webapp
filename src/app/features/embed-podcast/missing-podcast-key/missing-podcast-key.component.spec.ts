import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPodcastKeyComponent } from './missing-podcast-key.component';

describe('MissingPodcastKeyComponent', () => {
  let component: MissingPodcastKeyComponent;
  let fixture: ComponentFixture<MissingPodcastKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPodcastKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPodcastKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
