import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SucursalComponent } from './Components/sucursal/sucursal.component';
import { MonedaComponent } from './Components/moneda/moneda.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListaSucursalesComponent } from './Components/lista-sucursales/lista-sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    MonedaComponent,
    ListaSucursalesComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
