import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardApiService {
  private apiBaseUrl = 'http://localhost:3000/api/v1'; // Replace with your API base URL
  private apiKey =
    '6xVXB55YWJkD1UzpKWB5_CyDgEyHGqaGax3BUQS_PzjpGxV129bLZSDGkdpL'; // Replace with your API key

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getSentHistory(): Observable<any> {
    const url = `${this.apiBaseUrl}/messages`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).pipe(
      catchError((error) => {
        console.error('Error fetching sent history:', error);
        return throwError(error);
      })
    );
  }

  submitSms(phoneNumber: string, message: string): Observable<any> {
    const url = `${this.apiBaseUrl}/messages`;
    const headers = this.getHeaders();
    const body = { phoneNumber, message };
    return this.http.post(url, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error submitting SMS:', error);
        return throwError(error);
      })
    );
  }
}
