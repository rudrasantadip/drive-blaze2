import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContestsComponent } from './contests/contests.component';
import { HackSynthesisComponent } from './hack-synthesis/hack-synthesis.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  }
  ,
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'contests',component:ContestsComponent
  },
  {
    path:'hackathon',component:HackSynthesisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
