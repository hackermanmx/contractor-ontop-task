import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ontop-mobile-contractor-list',
  templateUrl: './mobile-contractor-list.component.html',
  styleUrls: ['./mobile-contractor-list.component.scss'],
})
export class MobileContractorListComponent implements OnInit {
  @Input() data: any = [];
  @Input() columns: any = [];
  @Input() actions: any = [];

  constructor() {}

  ngOnInit(): void {}
}
