import { Component, OnInit } from '@angular/core';
import {MDCSwitch} from '@material/switch';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	skillSet: String;
	constructor() { }

	switchControl: MDCSwitch;

	ngOnInit() {
		this.skillSet = "Technical Skills";
		this.switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));
	}

}
