import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent implements OnInit {
  public username: string = 'Pruebas';
  public appname: string = '';

  public menu: boolean = false;
  public checked: boolean = true;
  public themeSelected: string = 'dark';
  public menuOptions: { name: string; url: string }[] = [
    {
      name: 'Home',
      url: 'cine',
    },
    {
      name: 'Free to me',
      url: 'pronto',
    },
    {
      name: 'Store',
      url: 'popular',
    },
    {
      name: 'Channels',
      url: 'top',
    },
  ];

  constructor(
    private util: UtilService,
    private _menuService: MenuService,
    private themeService: ThemeService
  ) {
    this.appname = util.getAppName;
  }

  ngOnInit(): void {
    this.themeService.setTheme(this.themeSelected);
  }

  onThemeChange(theme: string) {
    this.themeSelected = theme;
    this.themeService.setTheme(this.themeSelected);
  }

  public toggle() {
    this._menuService.sendClickEvent();
  }
}
