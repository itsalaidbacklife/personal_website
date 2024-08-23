import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	get screenWidth() {
		return window.innerWidth;
	}
	get screenIsNotSmall() {
		return this.screenWidth >= 600;
	}

	constructor() { }

	ngOnInit() {
	}

}
