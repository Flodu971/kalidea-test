import { UserService } from "../user.service";
import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from "rxjs";

@Directive({
  selector: '[appIfUserDirective]'
})
export class IfUserDirectiveDirective implements OnDestroy {
  subscription: Subscription | undefined;

  constructor(
    private readonly hostElement: ElementRef,
    private readonly userService: UserService) {
    this.subscription = this.userService.user$.subscribe((user) => {
      this.update(user);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * add class
   * @param user User
   */
  protected update(user: User | null): void {
    if (!user) {
      this.hostElement.nativeElement.style.display = 'none';
    }
  }

}
