import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/core/styles/material.module';
import { ModuleHeaderComponent } from '../shared/module-header/module-header.component';

@NgModule({
  declarations: [DashboardComponent],
  exports: [ModuleHeaderComponent],
  imports: [CommonModule, MaterialModule, ModuleHeaderComponent],
})
export class NavigationModule {}
