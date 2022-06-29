import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletasComponent } from './telas/atletas/atletas.component';
import { HomeComponent } from './telas/home/home.component';
import { ImcComponent } from './telas/imc/imc.component';
import { PersonalComponent } from './telas/personal/personal.component';
import { PlanosComponent } from './telas/planos/planos.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "planos",
    component: PlanosComponent
  },
  {
    path: "atletas",
    component: AtletasComponent
  },
  {
    path: "personal",
    component: PersonalComponent
  },
  {
    path: "imc",
    component: ImcComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
