import { Component, OnInit, Input} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';
@Component({
	selector: 'app-skillbar',
	templateUrl: './skillbar.component.html',
	styleUrls: ['./skillbar.component.css'],
	animations: [
		trigger('labelAnimation', [
			state('visible', style({
				opacity: 1
			})),
			state('void', style({
				opacity: 0
			})),
			transition('void => *', [
				animate('.5s 1s ease')
			]),
			transition('* => void', [
				animate('.5s ease'), 
			]),
		
		]),

		trigger('childInsertRemoveTrigger', [
			state('visible', style({
				width: '100%'
			})),
			state('void', style({
				width: '0%'
			})),
			transition('void => *', [
				animate('.75s .75s ease')
			]),
			transition('* => void', [
				animate('.75s ease'), 
			]),

		]),
	]
})
export class SkillbarComponent implements OnInit {
	@Input() skill: string;
	@Input() on: boolean;
	// @Input() percentage: string;
	@Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
