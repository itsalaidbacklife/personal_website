import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'about', component: AboutComponent, data: {state: 'about'} },
	{ path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} },
	{ path: 'contact', component: ContactComponent, data: {state: 'contact'} },
]
@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
