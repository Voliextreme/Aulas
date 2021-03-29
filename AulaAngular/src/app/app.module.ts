import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { Exp2Component } from './exp2/exp2.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { Animais2Component } from './animais2/animais2.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    NavBarComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    Exp2Component,
    FichaAnimalComponent,
    Animais2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
