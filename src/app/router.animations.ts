import {trigger, state, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

const responsiveRouterTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),

    query(':enter', style({width: '100%', position: 'absolute'}), {optional: true}),
    // query('.entryWrapper', style({opacity: 0}), {optional: true}),

    /* 2 */ group([  // block executes in parallel
      query(':enter #aboutContainer', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0px)', position: 'relative' }))
      ], { optional: true }),

      query(':enter #portfolioContainer', [
        style({ transform: 'translateX(100%)' }),
        animate('.75s ease-out', style({ transform: 'translateX(0px)', position: 'relative'}))
        ], {optional: true}),

      query(':leave #portfolioContainer, :leave #cuttleContainer, :leave #assistmentsContainer', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(150%)', position: 'relative' }))
      ], { optional: true }),

      query(':leave #aboutContainer', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-150%)', position: 'relative' }))
      ], { optional: true }),

      query(':enter #cuttleOverviewContainer', [
        style({ transform: 'translateY(110%)' }),
        animate('.65s ease-out', style({ transform: 'translate(0px, -22px)', position: 'relative'}))
        ], {optional: true}),
    ]) //End group
  ])
]); // end trigger
export const routerTransition = responsiveRouterTransition;

