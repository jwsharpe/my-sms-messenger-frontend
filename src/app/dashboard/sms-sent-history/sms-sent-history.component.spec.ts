import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSentHistoryComponent } from './sms-sent-history.component';

describe('SmsSentHistoryComponent', () => {
  let component: SmsSentHistoryComponent;
  let fixture: ComponentFixture<SmsSentHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsSentHistoryComponent]
    });
    fixture = TestBed.createComponent(SmsSentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
