import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: UserService, private router: Router) {

  }
  
  // create a form group
  loginform=this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  });
  
  // get the form controls and validate; if valid, call the service (create a user)
  submitLogin(){
    if(this.loginform.valid){
      this.service.loginUser(this.loginform.value).subscribe({
        next: (response:any) => {
          console.log(response);
          // this.toastr.success('Login successful');
          localStorage.setItem('token', response.token)
          this.router.navigate(['/home']);
        },
        error : (error:any) => {
          console.log(error);
          this.toastr.error(error.error.message /*'Registration failed'*/);
        }
      });
    } else {
      this.toastr.error('The form seems to be emtpy, please fill it out');
    }
  }
}
