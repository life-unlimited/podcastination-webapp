import { EmbedComponent } from './embed.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../constants/routes';

describe('EmbedComponent', () => {
  let spectator: SpectatorRouting<EmbedComponent>;
  let component: EmbedComponent;
  const createComponent = createRoutingFactory({
    component: EmbedComponent,
    imports: [RouterModule.forRoot(AppRoutes)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
