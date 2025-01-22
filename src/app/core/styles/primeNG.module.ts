import { NgModule } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

@NgModule({
  imports: [
    InputSwitchModule,
    ToolbarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    CardModule,
    GalleriaModule,
    InputGroupModule,
    InputGroupAddonModule,
    CheckboxModule,
    ImageModule,
    PanelModule,
    MultiSelectModule,
    SelectModule,
  ],
  exports: [
    InputSwitchModule,
    ToolbarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    CardModule,
    GalleriaModule,
    InputGroupModule,
    InputGroupAddonModule,
    CheckboxModule,
    ImageModule,
    PanelModule,
    MultiSelectModule,
    SelectModule,
  ],
})
export class PrimeNGModules {}
