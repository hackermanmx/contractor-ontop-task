import { ContractorTypeEnum } from './contractor-type.enum';
import { ContractorStatusEnum } from './contractor-status.enum';
import { CurrencyEnum } from '../../core/enums/currency.enum';

export interface IContractor {
  id?: string;
  name: string;
  type: ContractorTypeEnum;
  startDate: Date;
  amount: number;
  status: ContractorStatusEnum;
  avatar?: string;
  currency: CurrencyEnum;
  colDescription?: string;
}
