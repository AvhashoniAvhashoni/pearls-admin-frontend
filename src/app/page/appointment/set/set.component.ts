import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import { Customer } from 'src/app/class/customer/customer';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  public time: Date = null;
  public date: Date = null;
  public service = new FormControl();
  public comment: string = null;
  public customer_id: Customer = null;
  public customer: Array<Customer>;
  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(): void {
    this._httpService.getCustomers().subscribe(res => {
      this.customer = res.map(customer => {
        return new Customer(customer) as Customer;
      });
    }, err => {
      console.error(err);
    });
  }

  public submit(): void {
    console.log(this.time)
    console.log(this.date)
    console.log(this.service.value)
    console.log(this.comment)
    console.log(this.customer_id)
  }
}
