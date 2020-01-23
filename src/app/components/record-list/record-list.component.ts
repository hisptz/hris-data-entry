import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/models/field.model';
import { Record } from 'src/app/models/record.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {
  @Input() recordValues: any[];
  @Input() fieldEntities: { string: Field };
  @Input() fieldIds: string[];
  @Output() selectItem: EventEmitter<Record> = new EventEmitter<Record>();
  constructor() {}

  ngOnInit() {}

  onSelectRecord(record: Record) {
    console.log(record);
  }
}
