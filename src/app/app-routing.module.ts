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
import { ProofCrafterComponent } from './proof-crafter/proof-crafter.component';
import { CuttleOverviewComponent } from './cuttle-overview/cuttle-overview.component';
import { CuttleArenaComponent } from './cuttle-arena/cuttle-arena.component';
import { CuttleMLComponent } from './cuttle-ml/cuttle-ml.component';

const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent, data: {state: 'about'} },
	{ path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} },
	{ path: 'contact', component: ContactComponent, data: {state: 'contact'} },
	{ path: 'doseTutor', component: DetailsDimensionalAnalysisComponent, data: {state: 'portfolioDetails'} },
	{ path: 'fracTutor', component: FracTutorComponent, data: {state: 'fracTutorDetails'}},
	{ path: 'cuttleOverview', component: CuttleOverviewComponent, data: {state: 'cuttleOverview'}},
	{ path: 'cuttleBot', component: CuttleBotComponent, data: {state: 'cuttleBotDetails'}},
	{ path: 'cuttleML', component: CuttleMLComponent, data: {state: 'cuttleMLDetails'}},
	{ path: 'cuttleArena', component: CuttleArenaComponent, data: {state: 'cuttleArenaDetails'}},
	{ path: 'vascular-surgery', component:SurgeryDetailsComponent, data: {state: 'vascular-surgery'} },
	{ path: 'otherWork', component: NoneducationalPortfolioComponent, data: {state: 'otherWork'} },
	{ path: 'intro-cs', component: EgiaComponent, data: {state: 'egia'} },
	{ path: 'proofCrafter', component: ProofCrafterComponent, data: {state: 'proofCrafter'} }
]
@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
