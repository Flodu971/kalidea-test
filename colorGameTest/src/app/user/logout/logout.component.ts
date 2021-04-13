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
  loading = false;

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
    this.loading = true;
    this.subscription = this.userService.logout().subscribe(() => {
      this.router.navigate(['/home']).then();
    },(e) => {
        this.loading = false;
    }, () => {
        this.loading = false;
    });
  }

}
