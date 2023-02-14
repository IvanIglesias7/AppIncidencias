import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionComponent } from './gestion/gestion.component';


@NgModule({
  declarations: [
    GestionComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule
  ]
})
export class GestionIncidenciasModule { }
