import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columnsToDisplay: any[] = [];
  @Input() columnsEntities: any;
  @Input() data: any[] = [];

  dataSource: any;

  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  onSelectItem(e, item) {
    e.stopPropagation();
    this.selectItem.emit(item);
  }
}
