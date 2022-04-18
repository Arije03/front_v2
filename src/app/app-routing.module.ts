import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'profil' , component: ProfilComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'header' , component: HeaderComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
