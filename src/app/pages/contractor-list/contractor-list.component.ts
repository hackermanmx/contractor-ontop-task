import { Component, OnInit } from '@angular/core';
import { IContractor } from '../../models/contractor/contractor.interface';
import { Observable } from 'rxjs';
import { TableService } from '../../core/services/table.service';
import { IClient } from '../../models/client/client.interface';
import { ClientService } from '../../core/services/client.service';
import { IContractorColumn } from '../../models/contractor/contractor-column.interface';

@Component({
  selector: 'ontop-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss'],
})
export class ContractorListComponent implements OnInit {
  rows$!: Observable<IContractor[]>;
  columns$!: Observable<IContractorColumn[]>;
  client$!: Observable<IClient>;
  columnsMap$!: Observable<{ [key: string]: string }>;

  actions: { icon: string; text: string }[] = [];

  constructor(private tableService: TableService, private clientService: ClientService) {}

  ngOnInit(): void {
    this.client$ = this.clientService.clients;

    this.rows$ = this.tableService.contractorList;
    this.columns$ = this.tableService.contractorColumnList;
    this.actions = this.tableService.menuActions;
  }

  clearForm(): void {
    // What it should do
    // this.form.reset();
  }
}
