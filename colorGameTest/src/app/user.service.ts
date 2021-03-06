import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, skip, tap } from 'rxjs/operators';
import { Credentials } from './models/credentials';
import { User } from './models/user';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly storageKey = 'user';
  private static readonly delay = 800;
  private userSubject: BehaviorSubject<User|null>;
  userExist: any;

  constructor(private http: HttpClient) {
    const storedUser = JSON.parse(localStorage.getItem(UserService.storageKey) || 'null');
    this.userSubject = new BehaviorSubject<User|null>(storedUser);
    this.userSubject.pipe(
      skip(1), // skip first emission
      tap(user => localStorage.setItem(UserService.storageKey, JSON.stringify(user)))
    ).subscribe();
  }

  get user(): User|null {
    return this.userSubject.value;
  }

  get user$(): Observable<User|null> {
    return this.userSubject.asObservable();
  }

  getUser(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }

  login({ password, email}: Credentials): Observable<User> {
    let obs: Observable<User>;

    this.getUser('https://jsonplaceholder.typicode.com/users?email=' + email)
      .subscribe(
        (res: any) => {
          if (res) {
            this.userExist = res;
          }
        });

    if (this.userExist && password){
      obs = of({
        id: this.userExist[0].id,
        username: this.userExist[0].username
      });
    } else {
      obs = throwError(new Error('invalid credential'));
    }
    return obs.pipe(
      delay(UserService.delay), // simulate api
      tap(user => this.userSubject.next(user))
    );
  }

  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(UserService.delay),
      tap(() => this.userSubject.next(null))
    );
  }
}
