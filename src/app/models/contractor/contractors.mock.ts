import { IContractor } from './contractor.interface';
import { ContractorTypeEnum } from './contractor-type.enum';
import { ContractorStatusEnum } from './contractor-status.enum';
import { CurrencyEnum } from '../../core/enums/currency.enum';

export const ContractorsMock: IContractor[] = [
  {
    avatar: '../../assets/row1.svg',
    name: 'Darlene Robertson',
    type: ContractorTypeEnum.Traditional,
    startDate: new Date(2021, 3, 4),
    amount: 200,
    status: ContractorStatusEnum.Active,
    currency: CurrencyEnum.USD,
  },
  {
    avatar: '../../assets/row2.svg',
    name: 'Darlene Robertson',
    type: ContractorTypeEnum.Traditional,
    startDate: new Date(2021, 3, 4),
    amount: 200,
    status: ContractorStatusEnum.Active,
    currency: CurrencyEnum.USD,
  },
  {
    avatar: '../../assets/row3.svg',
    name: 'Darlene Robertson',
    type: ContractorTypeEnum.Traditional,
    startDate: new Date(2021, 3, 4),
    amount: 200,
    status: ContractorStatusEnum.Pending,
    currency: CurrencyEnum.USD,
  },
];
