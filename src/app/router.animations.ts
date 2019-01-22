import {trigger, state, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
// import { ScreenSizeService } from './screen-size.service';

// alert(window.innerWidth);
// export const routerTransition = trigger('routerTransition', [
// 	transition('* => *', [

// 		query(':enter, :leave', [
// 			style({position: 'absolute', width: '100%'})
// 			], {optional: true}), //End query()
// 		group([		
// 			query(':enter .entryWrapper', stagger(400, [
// 							style({opacity: 0}),
// 							animate('1s ease-in-out', style({opacity: 1}))
// 							]), {optional: true}), //End query()
// 			query(':leave', [
// 				style({transform: 'translateX(0%)'}),
// 				animate('.5s ease-in-out', style({transform: 'translateX(-200%)', position: 'fixed'}))
// 				], {optional: true}), //End quer()
// 			]) //End group()
// 		]) //End transition()
// 	]); //End trigger()

// Small Screen Transitions
if (window.innerWidth <= 600) {
  var responsiveRouterTransition = trigger('routerTransition', [
    transition('* <=> *', [
      /* order */
      /* 1 */ query(':leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),

      query(':enter', style({width: '100%', position: 'absolute'}), {optional: true}),
      // query('.entryWrapper', style({opacity: 0}), {optional: true}),

      /* 2 */ group([  // block executes in parallel
        query(':enter #portfolioContainer', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(0px)', position: 'relative' }))
        ], { optional: true }),


        query(':enter #aboutContainer', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translate(0px, -12px)', position: 'relative' }))
        ], { optional: true }),

        query(':enter #contactContainer', [
          style({ transform: 'translateX(100%)' }),
          animate('.5s ease-out', style({ transform: 'translate(0px, -12px)', position: 'relative'}))
          ], {optional: true}),

        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', position: 'fixed' }))
        ], { optional: true }),

        query(':enter #dimensionalAnalysisContainer', [
          style({ transform: 'translateY(100%)' }),
          animate('1s ease-out', style({ transform: 'translate(0px, 0px)', position: 'relative'}))
          ], {optional: true}),

        query(':enter #fracTutorContainer', [
          style({ transform: 'translateY(100%)' }),
          animate('1.25s ease-out', style({ transform: 'translate(0px, 0px)', position: 'relative'}))
          ], {optional: true}),

        query(':enter #cuttleBotContainer', [
          style({ transform: 'translateY(200%)' }),
          animate('1.6s ease-out', style({ transform: 'translate(0px, 0px)', position: 'relative'}))
          ], {optional: true}),

        // query(':enter .entryWrapper', stagger(400, [
        //   style({ transform: 'translateY(100%)'}),
        //   animate('1s ease-in-out',
        //     style({ transform: 'translateY(0%)', opacity: 1})
        //     )
        //   ]), {optional: true}) //End query for :enter .entryWrapper


        query(':enter .entryWrapper', [
          style({ transform: 'translateY(100%)'}),
          animate('1s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1})
            )
          ], {optional: true})


        // query(':enter .entryWrapper', [
        //   style({transform: 'translateY(100%)'}),
        //   animate('.75s ease-in-out',
        //     style({transform: 'translateY(0%)', opacity: 1})
        //     )
        //   ], {optional: true}) //End entryWrapper query()
      ]) //End group
    ])
  ]) // end trigger

// Large Screen Transitions
} else {
  var responsiveRouterTransition = trigger('routerTransition', [
    transition('* <=> *', [
      /* order */
      /* 1 */ query(':leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),

      query(':enter', style({width: '100%', position: 'absolute'}), {optional: true}),
      // query('.entryWrapper', style({opacity: 0}), {optional: true}),

      /* 2 */ group([  // block executes in parallel
        query(':enter #aboutContainer,  :enter #portfolioContainer', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(0px)', position: 'relative' }))
        ], { optional: true }),

        query(':enter #contactContainer', [
        	style({ transform: 'translateX(100%)' }),
        	animate('.5s ease-out', style({ transform: 'translate(0px, -30px)', position: 'relative'}))
        	], {optional: true}),

        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', position: 'fixed' }))
        ], { optional: true }),

        query(':enter #dimensionalAnalysisContainer', [
          style({ transform: 'translateY(110%)' }),
          animate('1s ease-out', style({ transform: 'translate(0px, 0px)', position: 'relative'}))
          ], {optional: true}),

        query(':enter #fracTutorContainer', [
          style({ transform: 'translateY(150%)' }),
          animate('1.25s ease-out', style({ transform: 'translate(0px, 0px)', position: 'relative'}))
          ], {optional: true}),
        query(':enter #cuttleBotContainer', [
          style({ transform: 'translateY(300%)' }),
          animate('1.5s ease-out', style({ transform: 'translate(0px, 0px)', position: 'relative'}))
          ], {optional: true}),
        // query(':enter .entryWrapper', stagger(400, [
        //   style({ transform: 'translateY(100%)'}),
        //   animate('1s ease-in-out',
        //     style({ transform: 'translateY(0%)', opacity: 1})
        //     )
        //   ]), {optional: true}) //End query for :enter .entryWrapper


        query(':enter .entryWrapper', [
          style({ transform: 'translateY(100%)'}),
          animate('1s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1})
            )
          ], {optional: true})


        // query(':enter .entryWrapper', [
        // 	style({transform: 'translateY(100%)'}),
        // 	animate('.75s ease-in-out',
        // 		style({transform: 'translateY(0%)', opacity: 1})
        // 		)
        // 	], {optional: true}) //End entryWrapper query()
      ]) //End group
    ])
  ]) // end trigger
} //End large screens conditional
export const routerTransition = responsiveRouterTransition;

