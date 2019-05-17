import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-and-explanation',
  templateUrl: './picture-and-explanation.component.html',
  styleUrls: ['./picture-and-explanation.component.css']
})
export class PictureAndExplanationComponent implements OnInit {
	@Input() title: string;
	@Input() img: string;
	@Input() text: string;
	@Input() text2: string;
	@Input() link: string;
	@Input() caption: string;
	constructor() { }

	ngOnInit() {
	}

}
