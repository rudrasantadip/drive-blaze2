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

import { TechtitantakedownComponent } from './techtitantakedown/techtitantakedown.component';
import { CodersbrawlComponent } from './codersbrawl/codersbrawl.component';
import { TechphotographyComponent } from './techphotography/techphotography.component';
import { OrionComponent } from './orion/orion.component';
import { ContactComponent } from './contact/contact.component'

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
