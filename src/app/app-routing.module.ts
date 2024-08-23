import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CuttleOverviewComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component';
import { AssistmentsComponent } from './portfolio/portfolio_pages/assistments/assistments.component';

const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent, data: {state: 'about'} },
	{ path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'}, children: [
		{ path: '', redirectTo: 'assistments', pathMatch: 'full' },
		{ path: 'assistments', component: AssistmentsComponent },
		{ path: 'cuttle', component: CuttleOverviewComponent },
	] },
]
@NgModule({
	imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
