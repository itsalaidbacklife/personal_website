import { Component, OnInit } from '@angular/core';
import {MDCSwitch} from '@material/switch';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
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
