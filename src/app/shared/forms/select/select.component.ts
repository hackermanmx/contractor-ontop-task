import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ontop-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
