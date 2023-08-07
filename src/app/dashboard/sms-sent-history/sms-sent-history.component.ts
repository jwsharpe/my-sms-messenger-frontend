import { SmsSentHistoryPollingService } from './sms-sent-history-polling.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sms-sent-history',
  templateUrl: './sms-sent-history.component.html',
  styleUrls: ['./sms-sent-history.component.scss'],
})
export class SmsSentHistoryComponent implements OnInit {
  sentHistory: any[] = [];
  pollingSubscription: Subscription | undefined;

  constructor(private pollingService: SmsSentHistoryPollingService) {}

  ngOnInit(): void {
    this.startPolling();
  }

  private startPolling() {
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
