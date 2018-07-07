import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { filter } from '../../../../node_modules/rxjs/operators';

export interface IProduct {
  name: string;
  producer: string;
}

@Injectable()
export class QueryService {
  public results: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {}

  query(value) {
    return this.afs
      .collection('products')
      .valueChanges()
      .pipe(
        filter(
          (product: IProduct) =>
            product.name.indexOf(value) > -1 ||
            product.producer.indexOf(value) > -1
        )
      );
  }
}
