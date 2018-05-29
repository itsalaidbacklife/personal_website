import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
export const routerTransition = trigger('routerTransition', [
	transition('* <=> *', [

		query(':enter, :leave', [
			style({position: 'fixed', width: '100%'})
			], {optional: true}), //End query()

		query(':enter', [
			style({transform: 'translateX(100%)'}),
			animate('.5s ease-in-out', style({transform: 'translateX(0%)'}))
			], {optional: true}), //End query1
		]) //End transition()
	]); //End trigger()