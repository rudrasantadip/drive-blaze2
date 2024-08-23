import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { YuktiyagnaRoutingModule } from './yuktiyagna-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    YuktiyagnaRoutingModule
  ],
  exports:[YuktiyagnaRoutingModule]
})
export class YuktiyagnaModule { }
