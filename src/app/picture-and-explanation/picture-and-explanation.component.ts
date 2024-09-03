import { Component, OnInit, Input } from '@angular/core';
import { TextWithMetaData } from '../about/highlighted-paragraph/highlighted-paragraph.component';

@Component({
  selector: 'app-picture-and-explanation',
  templateUrl: './picture-and-explanation.component.html',
  styleUrls: ['./picture-and-explanation.component.css']
})
export class PictureAndExplanationComponent implements OnInit {
	@Input() title: string;
	@Input() img: string;
	@Input() text: string | TextWithMetaData[];
	@Input() text2: string;
	@Input() link: string;
	@Input() caption: string;
	@Input() smallScreenCaption: string;

	get footerVisibility() {
		if (window.innerWidth > 1000) {
			return 'visible';
		} else {
			return 'hidden';
		}
	}
	get screenIsSmall() {
		if (window.innerWidth < 1000) {
			return true;
		} else {
			return false;
		}
	}

	get paragraph1(): TextWithMetaData[] {
		if (typeof this.text === 'string') {
			return [{str: this.text}];
		}
		return this.text;
	}

	constructor() { }
	ngOnInit() {
	}

}
