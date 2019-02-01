import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsDimensionalAnalysisComponent } from './details-dimensional-analysis/details-dimensional-analysis.component';
import { FracTutorComponent } from './frac-tutor/frac-tutor.component';
import { CuttleBotComponent } from './cuttle-bot/cuttle-bot.component';
import { NoneducationalPortfolioComponent } from './noneducational-portfolio/noneducational-portfolio.component';
import { SurgeryDetailsComponent } from './surgery-details/surgery-details.component';
import { EgiaComponent } from './egia/egia.component';
const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent, data: {state: 'about'} },
	{ path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} },
	{ path: 'contact', component: ContactComponent, data: {state: 'contact'} },
	{ path: 'doseTutor', component: DetailsDimensionalAnalysisComponent, data: {state: 'portfolioDetails'} },
	{ path: 'fracTutor', component: FracTutorComponent, data: {state: 'fracTutorDetails'}},
	{ path: 'cuttleBot', component: CuttleBotComponent, data: {state: 'cuttleBotDetails'}},
	{ path: 'vascular-surgery', component:SurgeryDetailsComponent, data: {state: 'vascular-surgery'} },
	{ path: 'otherWork', component: NoneducationalPortfolioComponent, data: {state: 'otherWork'} },
	{ path: 'intro-cs', component: EgiaComponent, data: {state: 'egia'} }
]
@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
