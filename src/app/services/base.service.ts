import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  constructor() {}

  get model(): string {
    throw Error('Model not set');
  }

  findAll(): Observable<T[]> {
    return of([]);
  }
}
