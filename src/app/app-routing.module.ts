import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContestsComponent } from './contests/contests.component';
import { HackSynthesisComponent } from './hack-synthesis/hack-synthesis.component';
import { AboutComponent } from './about/about.component';
import { TechtitantakedownComponent } from './techtitantakedown/techtitantakedown.component';
import { CodersbrawlComponent } from './codersbrawl/codersbrawl.component';
import { TechphotographyComponent } from './techphotography/techphotography.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'about',
    component:AboutComponent
  }
  ,
  {
    path: 'contests',
    component: ContestsComponent,
  },
  {
    path: 'hackathon',
    component: HackSynthesisComponent,
  },
  {
    path:'techtitantakedown',
    component: TechtitantakedownComponent
  },
  {
    path: 'yuktiyagna',
    loadChildren: () =>
      import('./yuktiyagna/yuktiyagna.module').then((m) => m.YuktiyagnaModule),
  },
  {
    path:'algoarcade',component:CodersbrawlComponent
  },
  {
    path:'techforeye',component:TechphotographyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
