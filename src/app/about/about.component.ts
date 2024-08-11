import { Component, OnInit, HostBinding } from '@angular/core';
import {MDCSwitch} from '@material/switch';
import {
  trigger,
  state,
  style,
  animate,
  animateChild,
  transition,
  query
} from '@angular/animations';
import { TextWithMetaData } from './highlighted-paragraph/highlighted-paragraph.component';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	animations: [
		trigger('myInsertRemoveTrigger', [
			state('off', style({
				width: '0%'
			})),
			state('on', style({
				width: '100%'
			})),
			transition('* <=> *', [
				// query(':enter .bar-fill-container', 
				// 	animate('1s ease-in-out'), {optional: true}
				// ),
				// query(':leave .bar-fill-container', 
				// 	animate('1s 1s ease-in-out'), {optional: true}
				// ),
				query('@*', animateChild(), {optional: true})
				]
			)
		]),
	]
})
export class AboutComponent implements OnInit {
	skillSetNames: Array<string>;
	skillIndex: number;
	introText: Array<TextWithMetaData> = [
		{ str: "I'm Currently the ", highlighted: false},
		{ str: "Director of Engineering", highlighted: true },
		{ str: "at the ASSISTments Foundation, an Ed-Tech nonprofit, and I'm the ", highlighted: false },
		{ str: "creator and lead maintainer ", highlighted: true },
		{ str: "of the open source card battler cuttle.cards", highlighted: false },
	];

	get smallScreen() {
		return window.innerWidth < 600;
	}
	get skillSet() {
		return this.skillSetNames[this.skillIndex];
	}
	get learningLabel() {
		if (this.smallScreen || window.innerWidth < 1380) {
			return "Pedagogy"
		} else {
			return "Learning Science"
		}
	}

	// set skillSet(val) {
	// 	this.skillIndex = val;
	// }
	constructor() { }

	ngOnInit() {
		this.skillIndex = 0;
		this.skillSetNames = ["Technical Skills", "Learning Science Skills"];
	}

}
