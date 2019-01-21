// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillbarComponent } from './skillbar/skillbar.component';
import { PortfolioEntryComponent } from './portfolio-entry/portfolio-entry.component';
import { DetailsDimensionalAnalysisComponent } from './details-dimensional-analysis/details-dimensional-analysis.component';
import { FracTutorComponent } from './frac-tutor/frac-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    SkillbarComponent,
    PortfolioEntryComponent,
    DetailsDimensionalAnalysisComponent,
    FracTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
