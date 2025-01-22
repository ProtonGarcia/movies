import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { MaterialModule } from 'src/app/core/styles/material.module';
import { PrimeNGModules } from 'src/app/core/styles/primeNG.module';
import { HomeComponent } from '../pichones/home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { DetallesComponent } from './home/components/detalles/detalles.component';
import { AsistenciaComponent } from './home/components/asistencia/asistencia.component';

const routes: Routes = [
  {
    path: 'eventos/boda',
    component: HomeComponent,
  },
  {
    path: 'eventos/boda/:name/:token',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [ HomeComponent, HeaderComponent, DetallesComponent, AsistenciaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNGModules,ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule,HomeComponent],
})
export class PichonesModule {}
