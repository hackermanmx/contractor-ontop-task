import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ontop-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sitemap = [
    {
      icon: 'first',
      text: 'Contracts'
    },
    {
      icon: 'second',
      text: 'Documents'
    },
    {
      icon: 'third',
      text: 'Payout'
    },
    {
      icon: 'fourth',
      text: 'Time'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
