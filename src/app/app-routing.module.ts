import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventosCardComponent } from './components/eventos-card/eventos-card.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { InitCardsComponent } from './components/init-cards/init-cards.component';
import { ArchivosCardComponent } from './components/archivos-card/archivos-card.component';
import { FooterInnovaComponent } from './components/footer-innova/footer-innova.component';
import { PerfilNavComponent } from './components/perfil-nav/perfil-nav.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'registrar', component:RegisterComponent},
  {path: 'eventos', component:EventosCardComponent},
  {path: 'calendario', component:CalendarCardComponent},
  {path: 'init', component:InitCardsComponent},
  {path: 'archivos', component:ArchivosCardComponent},
  {path: 'footer', component:FooterInnovaComponent},
  {path: 'perfilnav', component:PerfilNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
