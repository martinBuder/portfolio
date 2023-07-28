import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TeaserComponent } from './teaser/teaser.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { VisitcardComponent } from './visitcard/visitcard.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TeaserComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    MenuComponent,
    VisitcardComponent,
    LegalnoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
