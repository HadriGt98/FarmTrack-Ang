import { Component } from '@angular/core';
import { JwtHelperService as jwtHelper } from '@auth0/angular-jwt';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private service:UserService) {}

  username = this.service.getUsername();

}
