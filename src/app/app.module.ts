import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamilia } from './components/articulos-familia/articulos-familia.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamilia,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
