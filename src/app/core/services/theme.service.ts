import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}
  public theme: string = 'dark';

  getTheme() {
    return this.theme;
  }

  setTheme(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    let body = document.body;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }

    console.log(theme);

    if (theme == 'dark') {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    } else {
      body.classList.add('theme-light');
      body.classList.remove('theme-dark');
    }

    this.theme = theme;
  }
}
