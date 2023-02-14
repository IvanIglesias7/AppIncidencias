import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'gestion', loadChildren: () => import('./modules/gestion-incidencias/gestion-incidencias.module').then(g=>g.GestionIncidenciasModule)
  },
  {
    path: 'introduccion', loadChildren: () => import('./modules/introduccion-incidencias/introduccion-incidencias.module').then(i=>i.IntroduccionIncidenciasModule)
  },
  {
    path: 'revision', loadChildren:() => import('./modules/revision-incidencias/revision-incidencias.module').then(r=>r.RevisionIncidenciasModule)
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
