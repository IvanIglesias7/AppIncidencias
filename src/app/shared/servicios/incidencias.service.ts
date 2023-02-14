import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  //Declaro la coleccion incidencia
  private incidenciaColeccion: CollectionReference<DocumentData>;

  //Inyecto el firestore y asocio la coleccion de arriba con la de firestore
  constructor(private readonly firestore: Firestore) { 
    this.incidenciaColeccion = collection(this.firestore, 'incidencia')
  }
}
