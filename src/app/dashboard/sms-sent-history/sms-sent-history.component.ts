import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../dashboard-api.service';

@Component({
  selector: 'app-sms-sent-history',
  templateUrl: './sms-sent-history.component.html',
  styleUrls: ['./sms-sent-history.component.scss'],
})
export class SmsSentHistoryComponent implements OnInit {
  sentHistory: any[] = []; // Modify the data type as needed

  constructor(private apiService: DashboardApiService) {} // Inject your API service

  ngOnInit() {
    // Fetch and populate sent history data
    this.apiService.getSentHistory().subscribe(
      (data) => {
        this.sentHistory = data;
      },
      (error) => {
        console.error('Error fetching sent history:', error);
      }
    );
  }
}
