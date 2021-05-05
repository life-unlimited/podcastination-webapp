import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEpisodesComponent } from './no-episodes.component';

describe('NoEpisodesComponent', () => {
  let component: NoEpisodesComponent;
  let fixture: ComponentFixture<NoEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
