import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../drive-team/home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { CoreComponent } from './core/core.component';
import { ConvenorComponent } from './convenor/convenor.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'faculty',
    component:FacultyComponent
  },
  {
    path:'convenor',
    component:ConvenorComponent
  },
  {
    path:'core',
    component:CoreComponent
  },
  {
    path:'student',
    component:StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveTeamRoutingModule { }
