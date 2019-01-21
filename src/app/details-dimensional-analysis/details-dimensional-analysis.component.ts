import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-dimensional-analysis',
  templateUrl: './details-dimensional-analysis.component.html',
  styleUrls: ['./details-dimensional-analysis.component.css']
})
export class DetailsDimensionalAnalysisComponent implements OnInit {

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
