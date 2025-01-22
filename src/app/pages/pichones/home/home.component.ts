import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';
import { SessionStorageService } from 'src/app/core/services/sessionStorage.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
    selector: 'app-home-pichones',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {
  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sessionStorage: SessionStorageService,
    private dataService: DataService
  ) {
    this.themeService.changeTheme('pichones');
  }

  async ngOnInit() {
    await this.getUserParams();
  }

  async getUserParams() {
    this.route.params.subscribe((params: any) => {
      const name = params['name'];
      const token = params['token'];

      if (name && token) {
        this.apiService
          .login('invitado/' + token)
          .then((resp: any) => {
            this.sessionStorage.setData('token', resp?.data?.token ?? '');
            this.dataService.sendMessage({
              username: resp?.data?.username ?? '',
              confirmado: resp?.data?.confirmado ?? false,
              relacionados: resp?.data?.relacionados ?? [],
              component: 'AsistenciaComponent',
              action: 'login',
            });
          })
          .catch((error) => {
            console.error('fallo getUserParams', error);
          });
      }
    });
  }
}
