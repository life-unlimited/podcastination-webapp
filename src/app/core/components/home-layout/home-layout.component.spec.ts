import { HomeLayoutComponent } from './home-layout.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { AppRoutes } from '../../constants/routes';
import { CoreModule } from '../../core.module';
import { ListenModule } from '../../../features/listen/listen.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeLayoutComponent', () => {
  let spectator: SpectatorRouting<HomeLayoutComponent>;
  let component: HomeLayoutComponent;
  const createComponent = createRoutingFactory({
    component: HomeLayoutComponent,
    imports: [CoreModule, ListenModule, HttpClientTestingModule], // Import this stuff because of listen component being used on home.
    routes: AppRoutes,
    stubsEnabled: false
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
