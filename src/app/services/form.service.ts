import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';

import { FormModel } from '../models/form.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseService<FormModel> {
  constructor(httpClient: NgxDhis2HttpClientService) {
    super(httpClient);
  }

  get model() {
    return 'forms';
  }
}
