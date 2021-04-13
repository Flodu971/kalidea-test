import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { UserService } from "../../user.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnDestroy {
  subscription: Subscription | undefined;

  constructor(private readonly router: Router,
              private readonly userService: UserService) { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * on logout
   */
  logout(): void {
    this.subscription = this.userService.logout().subscribe(() => {
      this.router.navigate(['/home']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    });
  }

}
