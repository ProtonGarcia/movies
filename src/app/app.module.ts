import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/styles/material.module';
import { PrimeNGModules } from './core/styles/primeNG.module';

import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './core/pipes/trucate.pipe';

import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SliderGaleriaComponent } from './components/slider-galeria/slider-galeria.component';
import { ErrorComponent } from './components/dialogs/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    TruncatePipe,
    HomeComponent,
    CardsComponent,
    CarouselComponent,
    SliderGaleriaComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimeNGModules,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
