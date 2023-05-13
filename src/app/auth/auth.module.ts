import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset/reset.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ResetComponent,
    NewLoginComponent,
    NewRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    ResetComponent,
    NewLoginComponent,
    NewRegisterComponent
  ]
})
export class AuthModule { }
