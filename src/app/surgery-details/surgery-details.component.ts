import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surgery-details',
  templateUrl: './surgery-details.component.html',
  styleUrls: ['./surgery-details.component.css']
})
export class SurgeryDetailsComponent implements OnInit {
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
