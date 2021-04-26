import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSeasonsComponent } from './no-seasons.component';

describe('NoSeasonsComponent', () => {
  let component: NoSeasonsComponent;
  let fixture: ComponentFixture<NoSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSeasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
