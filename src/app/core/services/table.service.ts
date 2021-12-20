import { Injectable } from '@angular/core';
import { IContractor } from '../../models/contractor/contractor.interface';
import { map, Observable, of } from 'rxjs';
import { ContractorsMock } from '../../models/contractor/contractors.mock';
import { ContractorColumnsMock } from '../../models/contractor/contractor-columns.mock';
import { IContractorColumn } from '../../models/contractor/contractor-column.interface';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}

  get menuActions(): { icon: string; text: string }[] {
    return [
      {
        icon: 'edit',
        text: 'Edit',
      },
      {
        icon: 'sign',
        text: 'Sign',
      },
      {
        icon: 'document',
        text: 'View summary',
      },
      {
        icon: 'delete',
        text: 'Delete',
      },
    ];
  }

  get contractorList(): Observable<IContractor[]> {
    return of(ContractorsMock);
  }

  get contractorColumnList(): Observable<IContractorColumn[]> {
    return of(ContractorColumnsMock);
  }

  get contractorColumnAsObj(): { [key: string]: string } {
    return ContractorColumnsMock.reduce((obj: any, item: IContractorColumn) => ((obj[item.field] = item.text), obj), {});
  }
}
