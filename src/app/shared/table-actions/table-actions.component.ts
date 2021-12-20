import { Component, Input } from '@angular/core';

@Component({
  selector: 'ontop-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent {
  @Input() actions!: any[];
  @Input() triggerIcon = 'more_vert';

  constructor() {}
}
