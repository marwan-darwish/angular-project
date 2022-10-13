import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.registerForm=this.fb.group({
      firstName:["",[Validators.required]],
      lastName:["",Validators.required],
      password:["",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      rpassword:["",[Validators.required,]],
      email:["",[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]]
    })
   }

  ngOnInit(): void {
  }
  get formControls(){
    return this.registerForm.controls;
  }
  get formDisable(){
    return this.registerForm.status=="VALID" && this.registerForm.controls['password'].value===this.registerForm.controls['rpassword'].value
  }
  handleSubmitForm(){
    console.log(this.registerForm)
  }

}
