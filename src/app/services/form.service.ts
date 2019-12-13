import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { FormModel } from '../models/form.model';
import { of } from 'rxjs';

const FORMS: FormModel[] = [
  {
    id: '52893cd128bd2',
    name: 'Public Employee Form'
  },
  {
    id: '5af19640ab837',
    code: null,
    name: 'Sponsorship Application Form'
  },
  {
    id: '52893cd15e933',
    name: 'Employee Application Form'
  },
  {
    id: '52893cd154e88',
    name: 'Private/FBO Employee Form'
  },
  {
    id: '52893cd15916e',
    name: 'Hospital Employee Form'
  }
];

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseService<FormModel> {
  constructor() {
    super();
  }

  get model() {
    return 'forms';
  }

  findAll() {
    return of(FORMS);
  }
}
