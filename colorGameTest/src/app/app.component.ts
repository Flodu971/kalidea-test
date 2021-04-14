import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'colorGameTest';
  user: User | undefined;

  constructor(private readonly userService: UserService) {
    this.userService.user$.subscribe((user) => {
      user ? this.user = user : this.user = undefined;
    });
  }
}
