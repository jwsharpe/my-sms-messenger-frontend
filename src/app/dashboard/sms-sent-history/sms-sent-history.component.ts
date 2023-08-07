import { SmsSentHistoryPollingService } from './sms-sent-history-polling.service';
import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../dashboard-api.service';

@Component({
  selector: 'app-sms-sent-history',
  templateUrl: './sms-sent-history.component.html',
  styleUrls: ['./sms-sent-history.component.scss'],
})
export class SmsSentHistoryComponent implements OnInit {
  sentHistory: any[] = []; // Modify the data type as needed

  constructor(private pollingService: SmsSentHistoryPollingService) {}

  ngOnInit(): void {
    this.pollingService.pollSentHistory(500).subscribe((history) => {
      this.sentHistory = history;
    });
  }
}
