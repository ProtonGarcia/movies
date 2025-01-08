import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'eventos',
    loadChildren: () =>
      import('./pages/pichones/pichones.module').then((m) => m.PichonesModule),
  },
  {
    path: 'pages',
    pathMatch: 'full',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pages',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {
    console.log('Routes configured:', routes);
  }
}
