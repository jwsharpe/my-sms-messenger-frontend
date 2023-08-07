import { Component } from '@angular/core';
import { DashboardApiService } from '../dashboard-api.service';

@Component({
  selector: 'app-sms-form',
  templateUrl: './sms-form.component.html',
  styleUrls: ['./sms-form.component.scss'],
})
export class SmsFormComponent {
  phoneNumber: string = '';
  message: string = '';

  constructor(private apiService: DashboardApiService) {} // Inject your API service

  submitSmsForm() {
    if (this.phoneNumber && this.message) {
      // Handle SMS submission logic here
      this.apiService.submitSms(this.phoneNumber, this.message).subscribe(
        (response) => {
          console.log('SMS Submitted:', response);
          this.message = '';
        },
        (error) => {
          console.error('Error submitting SMS:', error);
        }
      );
    }
  }
}
