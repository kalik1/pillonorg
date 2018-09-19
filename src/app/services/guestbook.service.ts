import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Guestbook } from '../models/Guestbook';

@Injectable({
  providedIn: 'root',
})
export class GuestbookService {
  guestbooksCollection: AngularFirestoreCollection<Guestbook>;
  guestbookDoc: AngularFirestoreDocument<Guestbook>;
  guestbooks: Observable<Guestbook[]>;
  guestbook: Observable<Guestbook>;

  constructor(private afs: AngularFirestore) {
    this.guestbooksCollection = this.afs.collection('guestbooks', ref => ref.orderBy('date', 'desc'));
  }

  getGuestbooks(): Observable<Guestbook[]> {
    // Get guestbooks with the id
    this.guestbooks = this.guestbooksCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Guestbook;
        data.id = action.payload.doc.id;
        data.date = new Date(data.date.seconds*1000);
        return data;
      });
    }));

    return this.guestbooks;
  }
  //
  newGuestbook(guestbook: Guestbook) {
    this.guestbooksCollection.add(guestbook);
  }

  getGuestbook(id: string): Observable<Guestbook> {
    this.guestbookDoc = this.afs.doc<Guestbook>(`guestbooks/${id}`);
    this.guestbook = this.guestbookDoc.snapshotChanges().pipe(map(action => {
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Guestbook;
        data.id = action.payload.id;
        return data;
      }
    }));

    return this.guestbook;
  }

  updateGuestbook(guestbook: Guestbook) {
    this.guestbookDoc = this.afs.doc(`guestbooks/${guestbook.id}`);
    this.guestbookDoc.update(guestbook);
  }

  deleteGuestbook(guestbook: Guestbook) {
    this.guestbookDoc = this.afs.doc(`guestbooks/${guestbook.id}`);
    this.guestbookDoc.delete();
  }

}
