import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponenteComponent } from './incidencias-componente/incidencias-componente.component';


@NgModule({
  declarations: [
    IncidenciasComponenteComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule
  ]
})
export class IncidenciasModule { }
