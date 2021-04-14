import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Subscription } from "rxjs";
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import {Credentials} from "../../models/credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error = false;
  subscription: Subscription | undefined;
  @Input() user: User | undefined;
  email!: { formControlName: string,  icon: string; id: string; title: string};
  pwd!: { formControlName: string; icon: string; id: string; title: string };

  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControl();
    this.email = {
      'formControlName' : 'email',
      'id': 'email',
      'title' : 'Email',
      'icon' : 'fa-at',
    };

    this.pwd = {
      'formControlName' : 'password',
      'id': 'password',
      'title' : 'Password',
      'icon' : 'fa-lock'
    };
    console.log(this.pwd.formControlName)
  }

  /**
   * init all controls
   */
  initFormControl(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.minLength(6)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    });
  }

  /**
   * on submit
   */
  validate(): void {
    const credentials: Credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.subscription = this.userService.login(credentials).subscribe((user: User) => {
      this.router.navigate(['/home']).then();
      this.user = user;
      console.log('user ', user);
    }, (e) => {
      this.error = true;
    });
  }


}
