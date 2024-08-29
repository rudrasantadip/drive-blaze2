import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriveTeamRoutingModule } from './drive-team-routing.module';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ConvenorComponent } from './convenor/convenor.component';
import { StudentComponent } from './student/student.component';
import { CoreComponent } from './core/core.component';


@NgModule({
  declarations: [
    HomeComponent,
    FacultyComponent,
    ConvenorComponent,
    StudentComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    DriveTeamRoutingModule
  ],
  exports:[DriveTeamRoutingModule]
})
export class DriveTeamModule { }
