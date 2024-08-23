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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    VideoBgComponent,
    FooterComponent,
    ContestsComponent,
    HackSynthesisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
