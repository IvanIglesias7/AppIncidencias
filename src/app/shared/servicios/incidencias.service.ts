import { Injectable } from '@angular/core';
import { addDoc, collectionData, CollectionReference, deleteDoc, doc, docData, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Incidencias } from '../interfaces/incidencias';

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
  
  getAll() {
    return collectionData(this.incidenciaColeccion, {
      idField: 'id',
    }) as Observable<Incidencias[]>;
  }

  get(id: string) {
    const incidenciaDocumentReference = doc(this.firestore, `incidencia/${id}`);
    return docData(incidenciaDocumentReference, { idField: 'id' });
  }

  create(incidencia: Incidencias) {
    return addDoc(this.incidenciaColeccion, incidencia);
  }

  update(incidencia: Incidencias) {
    const incidenciaDocumentReference = doc(
      this.firestore,
      `incidencia/${incidencia.id}`
    );
    return updateDoc(incidenciaDocumentReference, { ...incidencia });
  }

  delete(id: string) {
    const incidenciaDocumentReference = doc(this.firestore, `incidencia/${id}`);
    return deleteDoc(incidenciaDocumentReference);
  }
}
