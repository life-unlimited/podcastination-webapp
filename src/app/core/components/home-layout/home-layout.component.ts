import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

/**
 * The home layout component that is used for almost all views. It contains a background, logo and footer.
 *
 * @author Lennart Altenhof
 * @version 1.1
 */
@Component({
  selector: 'app-home',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  version = environment.version;
}
