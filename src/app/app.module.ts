import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { VideoBgComponent } from './video-bg/video-bg.component';
import { FooterComponent } from './footer/footer.component';
import { ContestsComponent } from './contests/contests.component';
import { HackSynthesisComponent } from './hack-synthesis/hack-synthesis.component';
import { AboutComponent } from './about/about.component';

import {HttpClientModule} from '@angular/common/http';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { TechtitantakedownComponent } from './techtitantakedown/techtitantakedown.component';
import { CodersbrawlComponent } from './codersbrawl/codersbrawl.component';
import { TechphotographyComponent } from './techphotography/techphotography.component';
import { OrionComponent } from './orion/orion.component';
import { ContactComponent } from './contact/contact.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { EventComponent } from './event/event.component';
import { PartnersComponent } from './partners/partners.component';
import { FinalistsComponent } from './finalists/finalists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    VideoBgComponent,
    FooterComponent,
    ContestsComponent,
    HackSynthesisComponent,
    AboutComponent,
    TechtitantakedownComponent,
    CodersbrawlComponent,
    TechphotographyComponent,
    OrionComponent,
    ContactComponent,
    TeamsComponent,
    WorkshopComponent,
    EventComponent,
    PartnersComponent,
    FinalistsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
