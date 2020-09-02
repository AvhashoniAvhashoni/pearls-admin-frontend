import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../service/http/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Customer } from 'src/app/class/customer/customer';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
  public province: Array<string>;
  public customer: FormGroup;
  constructor(private _httpService: HttpService) {
    this.province = ["Eastern Cape", "FreeState", "Gauteng", "Kwazulu Natal", "Limpopo", "Mpumalnga", "North West", "Northern Cape", "Western Cape"]
    this.customer = new FormGroup({
      first_name: new FormControl(null, Validators.compose([Validators.required])),
      last_name: new FormControl(null, Validators.compose([Validators.required])),
      nick_name: new FormControl(null, Validators.compose([Validators.required])),
      cell: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, Validators.compose([Validators.required])),
      date_of_birth: new FormControl(null, Validators.compose([Validators.required])),
      address_line_1: new FormControl(null, Validators.compose([Validators.required])),
      address_line_2: new FormControl(null),
      city: new FormControl(null, Validators.compose([Validators.required])),
      province: new FormControl(null, Validators.compose([Validators.required])),
      zip_code: new FormControl(null, Validators.compose([Validators.required])),
      next_of_kin_cell: new FormControl(null, Validators.compose([Validators.required])),
      subscribe: new FormControl(true, Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void { }

  public cellNumberFormat(): void {
    if (this.customer.value.cell && this.customer.value.cell.length == 9) {
      let cell: string = this.customer.value.cell;
      this.customer.controls["cell"].setValue(`${cell.substr(0, 2)} ${cell.substr(2, 3)} ${cell.substr(5, 4)}`);
    }
    if (this.customer.value.next_of_kin_cell && this.customer.value.next_of_kin_cell.length == 9) {
      let cell: string = this.customer.value.next_of_kin_cell;
      this.customer.controls["next_of_kin_cell"].setValue(`${cell.substr(0, 2)} ${cell.substr(2, 3)} ${cell.substr(5, 4)}`);
    }
  }

  public addContact(): void {
    if (this.customer.valid) {
      let customer: Customer = new Customer(this.customer.value);
      while (customer.get_cell.search(" ") != -1) {
        let cell: string = customer.get_cell;
        cell = cell.replace(" ", "");
        customer.set_cell(cell);
      }
      while (customer.get_next_of_kin_cell.search(" ") != -1) {
        let cell: string = customer.get_next_of_kin_cell;
        cell = cell.replace(" ", "");
        customer.set_next_of_kin_cell(cell);
      }
      customer.set_cell(`+27${customer.get_cell}`);
      customer.set_next_of_kin_cell(`+27${customer.get_next_of_kin_cell}`);
      customer.set_id(btoa(moment().format('MMDDYYYYHHmmss')));
      customer.set_active(true);
      customer.set_date_added(new Date());
      customer.set_date_deactive(null);
      this._httpService.addCustomer(customer).subscribe(res => {
        this.customer.reset();
      }, err => {
        console.log(err);
      });
    }
  }
}
