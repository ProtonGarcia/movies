import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { MaterialModule } from './core/styles/material.module';
import { PrimeNGModules } from './core/styles/primeNG.module';

import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';

import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './core/pipes/trucate.pipe';

import { LoginModule } from './components/auth/login.module';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ErrorComponent } from './components/dialogs/error/error.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SliderGaleriaComponent } from './components/slider-galeria/slider-galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { PichonesModule } from './pages/pichones/pichones.module';

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
    PichonesModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
