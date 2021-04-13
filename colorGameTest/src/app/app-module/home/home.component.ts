import { Component } from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User | undefined;

  constructor(private readonly userService: UserService) {
    this.userService.user$.subscribe((user) => {
      user ? this.user = user : this.user = undefined;
    });
  }

}
