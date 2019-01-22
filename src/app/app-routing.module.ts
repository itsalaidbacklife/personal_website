import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsDimensionalAnalysisComponent } from './details-dimensional-analysis/details-dimensional-analysis.component';
import { FracTutorComponent } from './frac-tutor/frac-tutor.component';
import { CuttleBotComponent } from './cuttle-bot/cuttle-bot.component';
const routes: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'about', component: AboutComponent, data: {state: 'about'} },
	{ path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} },
	{ path: 'contact', component: ContactComponent, data: {state: 'contact'} },
	{ path: 'doseTutor', component: DetailsDimensionalAnalysisComponent, data: {state: 'portfolioDetails'}},
	{ path: 'fracTutor', component: FracTutorComponent, data: {state: 'fracTutorDetails'}},
	{ path: 'cuttleBot', component: CuttleBotComponent, data: {state: 'cuttleBotDetails'}},
]
@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
