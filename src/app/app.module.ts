import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTransazioniComponent } from './lista-transazioni/lista-transazioni.component';
import { TransazioneSingolaComponent } from './transazione-singola/transazione-singola.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTransazioniComponent,
    TransazioneSingolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
