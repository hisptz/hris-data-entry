import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { ApiQueryParameter } from '../models/api-query-parameter.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  constructor(private readonly httpClient: NgxDhis2HttpClientService) {}

  get model(): string {
    throw Error('Model not set');
  }

  findAll(queryParameters?: ApiQueryParameter): Observable<T[]> {
    return this.httpClient.get(
      `${this.model}?paging=${
        queryParameters ? queryParameters.paging || true : true
      }`
    );
  }

  findById(id: string, queryParameters?: ApiQueryParameter) {
    return this.httpClient.get(`${this.model}/${id}`);
  }
}
