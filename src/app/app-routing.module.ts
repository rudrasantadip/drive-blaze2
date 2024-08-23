import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContestsComponent } from './contests/contests.component';
import { HackSynthesisComponent } from './hack-synthesis/hack-synthesis.component';
import { AboutComponent } from './about/about.component';

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
    path: 'yuktiyagna',
    loadChildren: () =>
      import('./yuktiyagna/yuktiyagna.module').then((m) => m.YuktiyagnaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
