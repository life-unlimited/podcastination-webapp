import { HomeLayoutComponent } from './home-layout.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { AppRoutes } from '../../constants/routes';
import { CoreModule } from '../../core.module';

describe('HomeLayoutComponent', () => {
  let spectator: SpectatorRouting<HomeLayoutComponent>;
  let component: HomeLayoutComponent;
  const createComponent = createRoutingFactory({
    component: HomeLayoutComponent,
    imports: [CoreModule],
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
