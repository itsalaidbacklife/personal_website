import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsDimensionalAnalysisComponent } from './portfolio/portfolio_pages/details-dimensional-analysis/details-dimensional-analysis.component';
import { FracTutorComponent } from './portfolio/portfolio_pages/frac-tutor/frac-tutor.component';
import { CuttleBotComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-bot/cuttle-bot.component';
import { SurgeryDetailsComponent } from './portfolio/portfolio_pages/surgery-details/surgery-details.component';
import { EgiaComponent } from './portfolio/portfolio_pages/egia/egia.component';
import { ProofCrafterComponent } from './portfolio/portfolio_pages/proof-crafter/proof-crafter.component';
import { CuttleOverviewComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component';
import { AssistmentsComponent } from './portfolio/portfolio_pages/assistments/assistments.component';
import { CuttleArenaComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-arena/cuttle-arena.component';
import { CuttleMLComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-ml/cuttle-ml.component';

const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent, data: {state: 'about'} },
	{ path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'}, children: [
		{ path: '', redirectTo: 'assistments', pathMatch: 'full' },
		{ path: 'assistments', component: AssistmentsComponent },
		{ path: 'cuttle', component: CuttleOverviewComponent },
	] },
	{ path: 'contact', component: ContactComponent, data: {state: 'contact'} },
	{ path: 'doseTutor', component: DetailsDimensionalAnalysisComponent, data: {state: 'portfolioDetails'} },
	{ path: 'fracTutor', component: FracTutorComponent, data: {state: 'fracTutorDetails'}},
	{ path: 'cuttleOverview', component: CuttleOverviewComponent, data: {state: 'cuttleOverview'}},
	{ path: 'cuttleBot', component: CuttleBotComponent, data: {state: 'cuttleBotDetails'}},
	{ path: 'cuttleML', component: CuttleMLComponent, data: {state: 'cuttleMLDetails'}},
	{ path: 'cuttleArena', component: CuttleArenaComponent, data: {state: 'cuttleArenaDetails'}},
	{ path: 'vascular-surgery', component:SurgeryDetailsComponent, data: {state: 'vascular-surgery'} },
	{ path: 'intro-cs', component: EgiaComponent, data: {state: 'egia'} },
	{ path: 'proofCrafter', component: ProofCrafterComponent, data: {state: 'proofCrafter'} }
]
@NgModule({
	imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
