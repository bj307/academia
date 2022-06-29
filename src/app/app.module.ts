import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './estrutura/header/header.component';
import { BodyComponent } from './estrutura/body/body.component';
import { FooterComponent } from './estrutura/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './telas/home/home.component';
import { PlanosComponent } from './telas/planos/planos.component';
import { AtletasComponent } from './telas/atletas/atletas.component';
import { PersonalComponent } from './telas/personal/personal.component';
import { ImcComponent } from './telas/imc/imc.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    PlanosComponent,
    AtletasComponent,
    PersonalComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
