import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  previousPage: string = '/home';

  constructor (private service:UserService) {}

  username = this.service.getUsername();

}
