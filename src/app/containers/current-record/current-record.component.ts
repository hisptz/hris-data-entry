import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/store/store.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/models/field.model';
import { getCurrentFormFields } from 'src/app/store/form/form.selectors';

@Component({
  selector: 'app-current-record',
  templateUrl: './current-record.component.html',
  styleUrls: ['./current-record.component.scss']
})
export class CurrentRecordComponent implements OnInit {
  formFields$: Observable<Field[]>;
  fieldSearchTerm: string;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.formFields$ = this.store.pipe(select(getCurrentFormFields));
  }

  trackByFn(index, item) {
    return item ? item.id : index;
  }

  onSearchField(e) {
    e.stopPropagation();
    this.fieldSearchTerm = e.target.value;
  }
}
