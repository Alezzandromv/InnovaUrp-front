import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventosCardComponent } from './components/eventos-card/eventos-card.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { InitCardsComponent } from './components/init-cards/init-cards.component';
import { PerfilNavComponent } from './components/perfil-nav/perfil-nav.component';
import { ArchivosCardComponent } from './components/archivos-card/archivos-card.component';
import { FooterInnovaComponent } from './components/footer-innova/footer-innova.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventosCardComponent,
    CalendarCardComponent,
    InitCardsComponent,
    PerfilNavComponent,
    ArchivosCardComponent,
    FooterInnovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
