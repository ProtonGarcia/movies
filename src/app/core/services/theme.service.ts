import { Injectable } from '@angular/core';

type Theme = 'dark' | 'light' | 'pichones' | 'custom';

interface ThemeClassConfig {
  add: string;
  remove: string | string[];
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme: string = 'dark';
  public themes: { [key in Theme]: ThemeClassConfig } = <
    { [key in Theme]: ThemeClassConfig }
  >{};

  constructor() {
    this.loadThemes();
  }

  getTheme() {
    return this.theme;
  }

  setTheme(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    let body = document.body;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }

    console.log('tema aplicado.............',theme);

    if (theme == 'dark') {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    } else {
      body.classList.add('theme-light');
      body.classList.remove('theme-dark');
    }

    this.theme = theme;
  }

  changeTheme(theme: Theme): void {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    const body = document.body;

    body.classList.remove('theme-light', 'theme-dark', 'pichones');

   

    if (this.themes[theme]) {
      const selectedTheme = this.themes[theme];
      body.classList.add(selectedTheme.add);

      if (themeLink) {
        themeLink.href = theme + '.css';
        console.log('tema aplicado.............',theme);

      }

      if (Array.isArray(selectedTheme.remove)) {
        selectedTheme.remove.forEach((cls) => body.classList.remove(cls));
      } else {
        body.classList.remove(selectedTheme.remove);
      }
    } else {
      console.error('Tema no reconocido:', theme);
    }
  }

  public loadThemes() {
    this.themes = {
      dark: {
        add: 'theme-dark',
        remove: 'theme-light',
      },
      light: {
        add: 'theme-light',
        remove: 'theme-dark',
      },
      pichones: {
        add: 'pichones',
        remove: ['theme-dark', 'theme-light'],
      },
      custom: {
        add: 'pichones',
        remove: ['theme-dark', 'theme-light'],
      },
    };
  }
}
