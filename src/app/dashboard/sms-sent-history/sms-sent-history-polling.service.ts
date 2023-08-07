// src/app/sms-sent-history/sms-sent-history-polling.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interval, switchMap } from 'rxjs';
import { DashboardApiService } from '../dashboard-api.service';

@Injectable({
  providedIn: 'root',
})
export class SmsSentHistoryPollingService {
  constructor(private api: DashboardApiService) {}

  pollSentHistory(intervalTime: number): Observable<any> {
    return interval(intervalTime).pipe(
      switchMap(() => this.api.getSentHistory())
    );
  }
}
