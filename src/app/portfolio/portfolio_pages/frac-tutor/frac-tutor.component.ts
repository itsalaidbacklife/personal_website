import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frac-tutor',
  templateUrl: './frac-tutor.component.html',
  styleUrls: ['./frac-tutor.component.css']
})
export class FracTutorComponent implements OnInit {
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
