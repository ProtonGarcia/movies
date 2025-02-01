import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  loading$ = this.loader.loading$;
  constructor(public loader: LoaderService) {}

  title = 'pruebaCuscatlan';
}
