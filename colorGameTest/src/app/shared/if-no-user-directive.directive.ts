import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { IfUserDirectiveDirective } from "./if-user-directive.directive";

@Directive({
  selector: '[appIfNoUserDirective]'
})
export class IfNoUserDirectiveDirective extends IfUserDirectiveDirective {
  subscription: Subscription | undefined;

  constructor(private readonly _hostElement: ElementRef,
              private readonly _userService: UserService) {
    super(_hostElement, _userService);
    this.subscription = this._userService.user$.subscribe((user) => {
      this.update(user);
    });
  }

  /**
   * add class
   * @param user User
   */
  protected update(user: User | null): void {
    if (user && this._hostElement) {
      this._hostElement.nativeElement.style.display = 'none';
    }
  }

}
