import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEntryComponent } from './podcast-entry.component';

describe('PodcastEntryComponent', () => {
  let component: PodcastEntryComponent;
  let fixture: ComponentFixture<PodcastEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
