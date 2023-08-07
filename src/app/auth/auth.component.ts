import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Import the AuthService
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isSignIn: boolean = true;

  // Properties for form data
  signInEmail: string = '';
  signInPassword: string = '';
  signUpEmail: string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';
  signInError: string = '';
  signUpError: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inject the AuthService

  toggleForm() {
    this.isSignIn = !this.isSignIn;
  }

  signIn(signInForm: any) {
    if (signInForm.valid) {
      this.authService
        .signIn(this.signInEmail, this.signInPassword)
        .pipe(
          catchError((error) => {
            console.error('Sign In Error:', error.message);
            this.signInError = error.message;
            return throwError(() => new Error(error));
          })
        )
        .subscribe((response) => {
          console.log('Sign In Successful:', response);
          this.signInError = '';
          this.router.navigate(['/dashboard']);
        });
    }
  }

  signUp(signUpForm: any) {
    if (signUpForm.valid) {
      if (this.signUpPassword === this.confirmPassword) {
        this.authService
          .signUp(this.signUpEmail, this.signUpPassword)
          .pipe(
            catchError((error) => {
              console.error('Sign Up Error:', error);
              this.signUpError = error.message;
              return throwError(() => new Error(error));
            })
          )
          .subscribe((response) => {
            console.log('Sign Up Successful:', response);
            this.signUpError = '';
            this.router.navigate(['/dashboard']);
          });
      } else {
        alert('Passwords do not match.');
      }
    }
  }
}
