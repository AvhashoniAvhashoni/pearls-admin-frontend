import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/class/customer/customer';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public sms: string = null;
  public subject: string = null;
  public email: string = null;
  public message: string = null;

  constructor(private _dialogRef: MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) private _contacts: Array<Customer>, private _httpService: HttpService) { }

  ngOnInit(): void { }

  public sendSMS(): void {
    for (let contact of this._contacts) {
      this._httpService.postSMS({ cell: contact.get_cell, message: this.sms }).subscribe(res => {
        console.log(`sms sent to ${contact.get_nick_name}`);
      }, err => {
        // console.error(err);
        console.log(`Failed to send SMS to ${contact.get_nick_name}`);
      });
    }
  }

  public sendEmail(): void {
    for (let contact of this._contacts) {
      this._httpService.postEmail({ to: contact.get_email, subject: this.subject, message: this.email }).subscribe(res => {
        console.log(`email sent to ${contact.get_nick_name}`);
      }, err => {
        console.log(err);
        console.log(`Failed to send Email to ${contact.get_nick_name}`);
      });
    }
  }

  public send(): void {
    this.subject && this.email ? this.sendEmail() : this.message = `Email not sent!`;
    this.sms ? this.sendSMS() : this.message = `SMS not sent!`;
    if ((!this.subject || !this.email))
      if (!this.sms)
        this.message = "SMS and Email not sent!"
  }
}
