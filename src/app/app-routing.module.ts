import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'registrar', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
