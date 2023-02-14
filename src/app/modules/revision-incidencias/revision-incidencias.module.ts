import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionComponent } from './revision/revision.component';


@NgModule({
  declarations: [
    RevisionComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule
  ]
})
export class RevisionIncidenciasModule { }
