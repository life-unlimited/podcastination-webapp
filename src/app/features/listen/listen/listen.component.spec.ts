import { ListenComponent } from './listen.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ListenModule } from '../listen.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListenToPodcastComponent', () => {
  let spectator: Spectator<ListenComponent>;
  let component: ListenComponent;
  const createComponent = createComponentFactory({
    component: ListenComponent,
    imports: [ListenModule, HttpClientTestingModule]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
