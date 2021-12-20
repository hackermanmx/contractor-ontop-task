import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CardComponent } from './card/card.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { ChatComponent } from './chat/chat.component';
import { DatepickerComponent } from './forms/datepicker/datepicker.component';
import { SelectComponent } from './forms/select/select.component';
import { TableComponent } from './table/table.component';
import { MobileContractorListComponent } from './mobile-contractor-list/mobile-contractor-list.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    CardComponent,
    FilterInputComponent,
    ChatComponent,
    DatepickerComponent,
    SelectComponent,
    TableComponent,
    MobileContractorListComponent,
    TableActionsComponent,
  ],
  exports: [
    CardComponent,
    FilterInputComponent,
    ChatComponent,
    DatepickerComponent,
    SelectComponent,
    TableComponent,
    MobileContractorListComponent,
    TableActionsComponent,
  ],
  imports: [CommonModule, MaterialModule, MatDividerModule],
})
export class SharedModule {}
