import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router) {

}

registerform=this.builder.group({
  username:this.builder.control('',[Validators.required]),
  firstname:this.builder.control(''),
  lastname:this.builder.control(''),
  password:this.builder.control('',[Validators.required]),
});

submitRegistration(){
  if(this.registerform.valid){
    this.service.registerUser(this.registerform.value).subscribe(
      (response:any)=>{
        console.log(response);
        this.toastr.success('Registration successful');
      },
      (error)=>{
        console.log(error);
        this.toastr.error('Registration failed');
      }
    );
  } else {
    this.toastr.error('Please fill all the required fields');
  }
}
}