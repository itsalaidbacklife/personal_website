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
})
export class AboutComponent implements OnInit {
	skillSetNames: Array<string>;
	skillIndex: number;
	introText: Array<TextWithMetaData> = [
		{ str: "I'm Currently the Director of Engineering at the"},
		{ str: "ASSISTments Foundation,", route: '/portfolio/assistments' },
		{ str: "and I'm the creator and lead maintainer of the open source card battler" },
		{ str: "cuttle.cards", route: '/portfolio/cuttle' },
	];
	childStyles: { [key: string]: string };

	get smallScreen() {
		return window.innerWidth < 600;
	}

	constructor() { }

	ngOnInit() {
		this.childStyles = {'margin-top': '128px'};
	}

}
