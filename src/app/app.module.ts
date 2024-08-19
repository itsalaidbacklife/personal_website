// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillbarComponent } from './about/skillbar/skillbar.component';
import { PortfolioEntryComponent } from './portfolio/portfolio-entry/portfolio-entry.component';
import { DetailsDimensionalAnalysisComponent } from './portfolio/portfolio_pages/details-dimensional-analysis/details-dimensional-analysis.component';
import { FracTutorComponent } from './portfolio/portfolio_pages/frac-tutor/frac-tutor.component';
import { CuttleBotComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-bot/cuttle-bot.component';
import { SurgeryDetailsComponent } from './portfolio/portfolio_pages/surgery-details/surgery-details.component';
import { EgiaComponent } from './portfolio/portfolio_pages/egia/egia.component';
import { ProofCrafterComponent } from './portfolio/portfolio_pages/proof-crafter/proof-crafter.component';
import { PictureAndExplanationComponent } from './picture-and-explanation/picture-and-explanation.component';
import { CuttleOverviewComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component';
import { CuttleArenaComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-arena/cuttle-arena.component';
import { CuttleMLComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-ml/cuttle-ml.component';
import { HighlightedParagraphComponent } from './about/highlighted-paragraph/highlighted-paragraph.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { PortfolioNavComponent } from './portfolio/portfolio-nav/portfolio-nav.component';

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
    FracTutorComponent,
    CuttleBotComponent,
    SurgeryDetailsComponent,
    EgiaComponent,
    ProofCrafterComponent,
    PictureAndExplanationComponent,
    CuttleOverviewComponent,
    CuttleArenaComponent,
    CuttleMLComponent,
    HighlightedParagraphComponent,
    AboutSectionComponent,
    PortfolioNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
