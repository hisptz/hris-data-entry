import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { BaseService } from './base.service';
import { Record } from '../models/record.model';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordService extends BaseService<Record> {
  constructor(httpClient: NgxDhis2HttpClientService) {
    super(httpClient);
  }

  get model() {
    return 'records';
  }

  findAll() {
    // TODO: This is temporary hard coding to simulate record display
    return this.findById('52cd3b422cb7d').pipe(map(record => [record]));
  }
}
