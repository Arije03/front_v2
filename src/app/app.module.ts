import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfilComponent } from './profil/profil.component';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ParametreComponent } from './parametre/parametre.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';















@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    RegisterComponent,
    HeaderComponent,
    ParametreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatBottomSheetModule,
    FormsModule,
    MatCheckboxModule,
    
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
