import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.css']
})
export class PortfolioEntryComponent implements OnInit {
	@Input() title: string;
	@Input() img: string;
	@Input() txt: string;
	@Input() txt2: string;
	@Input() linkText: string;
	@Input() link: string;
	constructor() { }

	ngOnInit() {
	}

}
