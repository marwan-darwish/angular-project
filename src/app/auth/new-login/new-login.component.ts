import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  handleSubmitForm(form : any){
    console.log(form)
    console.log(form.status);
    this.authService.setAuth(true)
  }
  isDisabled(form:any){
if(form.status==="INVALID"){
  return false
} else{
  return true
}
  }

}
