import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ontop-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() showActions = true;

  constructor() {}

  ngOnInit(): void {}
}
