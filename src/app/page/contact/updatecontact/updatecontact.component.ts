import { Component, OnInit, Inject, DoCheck } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/class/customer/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import * as moment from 'moment';
@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.scss']
})
export class UpdatecontactComponent implements OnInit, DoCheck {
  public customer: FormGroup;
  public province: Array<string>;

  constructor(private _dialogRef: MatDialogRef<UpdatecontactComponent>, @Inject(MAT_DIALOG_DATA) private _contact: Customer, private _httpService: HttpService) {
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
      active: new FormControl(true, Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
    this.customer.controls["first_name"].setValue(this._contact.get_first_name);
    this.customer.controls["last_name"].setValue(this._contact.get_last_name);
    this.customer.controls["nick_name"].setValue(this._contact.get_nick_name);
    this.customer.controls["cell"].setValue(this._contact.get_cell.substr(3, 9));
    this.customer.controls["email"].setValue(this._contact.get_email);
    this.customer.controls["date_of_birth"].setValue(moment(this._contact.get_date_of_birth).format("yyy-MM-DD"));
    this.customer.controls["address_line_1"].setValue(this._contact.get_address_line_1);
    this.customer.controls["address_line_2"].setValue(this._contact.get_address_line_2);
    this.customer.controls["city"].setValue(this._contact.get_city);
    this.customer.controls["province"].setValue(this._contact.get_province);
    this.customer.controls["zip_code"].setValue(this._contact.get_zip_code);
    this.customer.controls["next_of_kin_cell"].setValue(this._contact.get_next_of_kin_cell.substr(3, 9));
    this.customer.controls["subscribe"].setValue(this._contact.get_subscribe);
    this.customer.controls["active"].setValue(this._contact.get_active);
    this.cellNumberFormat();
  }

  ngDoCheck(): void {
    if (!this.customer.value.active)
      this.customer.controls["subscribe"].disable();
    else
      this.customer.controls["subscribe"].enable();
  }

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

  public active(event: any): void {
    if (event.checked) {
      this._contact.set_date_deactive(null);
      this.customer.controls["subscribe"].setValue(true);
    } else {
      this._contact.set_date_deactive(new Date());
      this.customer.controls["subscribe"].setValue(false);
    }
  }

  public updateContact(): void {
    if (this.customer.valid) {
      this._contact.set_customer(this.customer.value);
      while (this._contact.get_cell.search(" ") != -1) {
        let cell: string = this._contact.get_cell;
        cell = cell.replace(" ", "");
        this._contact.set_cell(cell);
      }
      while (this._contact.get_next_of_kin_cell.search(" ") != -1) {
        let cell: string = this._contact.get_next_of_kin_cell;
        cell = cell.replace(" ", "");
        this._contact.set_next_of_kin_cell(cell);
      }
      this._contact.set_cell(`+27${this._contact.get_cell}`);
      this._contact.set_next_of_kin_cell(`+27${this._contact.get_next_of_kin_cell}`);
      if (!this._contact.get_active)
        this._contact.set_subscribe(false);
      this._httpService.updateCustomer(this._contact).subscribe(res => {
        this._dialogRef.close(JSON.stringify(res));
      }, err => {
        console.error(err);
      });
    }
  }
}
