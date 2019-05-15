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
import { SkillbarComponent } from './skillbar/skillbar.component';
import { PortfolioEntryComponent } from './portfolio-entry/portfolio-entry.component';
import { DetailsDimensionalAnalysisComponent } from './details-dimensional-analysis/details-dimensional-analysis.component';
import { FracTutorComponent } from './frac-tutor/frac-tutor.component';
import { CuttleBotComponent } from './cuttle-bot/cuttle-bot.component';
import { NoneducationalPortfolioComponent } from './noneducational-portfolio/noneducational-portfolio.component';
import { SurgeryDetailsComponent } from './surgery-details/surgery-details.component';
import { EgiaComponent } from './egia/egia.component';
import { ProofCrafterComponent } from './proof-crafter/proof-crafter.component';
import { PictureAndExplanationComponent } from './picture-and-explanation/picture-and-explanation.component';

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
    NoneducationalPortfolioComponent,
    SurgeryDetailsComponent,
    EgiaComponent,
    ProofCrafterComponent,
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
