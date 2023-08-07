import { SmsSentHistoryPollingService } from './sms-sent-history-polling.service';
import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../dashboard-api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sms-sent-history',
  templateUrl: './sms-sent-history.component.html',
  styleUrls: ['./sms-sent-history.component.scss'],
})
export class SmsSentHistoryComponent implements OnInit {
  sentHistory: any[] = []; // Modify the data type as needed
  pollingSubscription: Subscription | undefined;

  constructor(private pollingService: SmsSentHistoryPollingService) {}

  ngOnInit(): void {
    this.pollingSubscription = this.pollingService
      .pollSentHistory(500)
      .subscribe((history) => {
        this.sentHistory = history;
      });
  }
  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }
}
