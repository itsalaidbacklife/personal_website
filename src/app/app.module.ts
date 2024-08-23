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
import { CuttleOverviewComponent } from './portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component';
import { HighlightedParagraphComponent } from './about/highlighted-paragraph/highlighted-paragraph.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { PortfolioNavComponent } from './portfolio/portfolio-nav/portfolio-nav.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { AssistmentsComponent } from './portfolio/portfolio_pages/assistments/assistments.component';
import { PictureAndExplanationComponent } from './picture-and-explanation/picture-and-explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    CuttleOverviewComponent,
    HighlightedParagraphComponent,
    AboutSectionComponent,
    PortfolioNavComponent,
    SectionHeaderComponent,
    AssistmentsComponent,
    PictureAndExplanationComponent
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
