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

	get skillSet() {
		return this.skillSetNames[this.skillIndex];
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
