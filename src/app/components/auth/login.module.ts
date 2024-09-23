import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';

import { MaterialModule } from 'src/app/core/styles/material.module';
import { PrimeNGModules } from 'src/app/core/styles/primeNG.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [PortalComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNGModules,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule,LoginComponent],
})
export class LoginModule {}
