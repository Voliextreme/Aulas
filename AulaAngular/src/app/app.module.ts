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

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    NavBarComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent
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
