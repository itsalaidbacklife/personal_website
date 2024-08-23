import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-nav',
  templateUrl: './portfolio-nav.component.html',
  styleUrls: ['./portfolio-nav.component.css']
})
export class PortfolioNavComponent implements OnInit {
  links: Array<{route: string, displayText: string}>;
  constructor() { }

  ngOnInit() {
    this.links = [
      { route: 'assistments', displayText: 'ASSISTments' },
      { route: 'cuttle', displayText: 'cuttle.cards' },
    ];
  }

}
