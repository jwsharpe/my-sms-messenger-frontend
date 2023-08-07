import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBaseUrl = environment.authApiBaseUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    const url = `${this.apiBaseUrl}/sign_in`;
    const data = { email, password };
    return this.http.post(url, data).pipe(
      map((response: any) => {
        this.setToken(response.token);
        return response;
      })
    );
  }

  signUp(email: string, password: string): Observable<any> {
    const url = `${this.apiBaseUrl}/sign_up`;
    const data = { email, password };
    return this.http.post(url, data).pipe(
      map((response: any) => {
        this.setToken(response.token);
        return response;
      })
    );
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  // Store the token in local storage
  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
