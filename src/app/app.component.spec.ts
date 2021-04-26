import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [AppModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
