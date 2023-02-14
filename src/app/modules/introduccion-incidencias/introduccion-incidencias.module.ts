import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule
  ]
})
export class IntroduccionIncidenciasModule { }
