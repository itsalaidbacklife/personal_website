import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuttle-bot',
  templateUrl: './cuttle-bot.component.html',
  styleUrls: ['./cuttle-bot.component.css']
})
export class CuttleBotComponent implements OnInit {
	get imageLinkVisibility() {
		if (window.innerWidth > 700) {
			return 'visible';
		} else {
			return 'hidden';
		}
	}

	get smallScreenTextVisibility() {
		if (window.innerWidth < 700) {
			return 'visible';
		} else {
			return 'hidden';
		}
	}
	constructor() { }

	ngOnInit() {
	}

}
