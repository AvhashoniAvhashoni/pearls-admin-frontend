import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/class/customer/customer';
import { HttpService } from 'src/app/service/http/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdatecontactComponent } from '../updatecontact/updatecontact.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ["nick_name", "cell", "email", "date_of_birth", "subscribe", "details"];
  private customers: Array<Customer> = null;
  public dataSource: MatTableDataSource<Customer>;

  constructor(private _httpService: HttpService, public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(): void {
    this._httpService.getCustomers().subscribe(res => {
      this.customers = res.map(customer => {
        return new Customer(customer) as Customer;
      });
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      console.error(err);
    });
  }

  public formatCellNumber(cell: string): string {
    return `${cell.substr(0, 3)} ${cell.substr(3, 2)} ${cell.substr(5, 3)} ${cell.substr(8, 4)}`;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public UpdateContact(contact: Customer): void {
    const dialogRef = this._dialog.open(UpdatecontactComponent, {
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public subscribe(customer: Customer): void {
    if (customer.get_active) {
      this._httpService.updateCustomer(customer).subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      });
    } else {
      customer.set_subscribe(false);
    }
  }

  public message(): void {
    let customers: Array<Customer> = [];
    this.customers.map(data => {
      if (data.get_subscribe) {
        customers.push(data);
      }
    });
    if (customers.length > 0) {
      const dialogRef = this._dialog.open(MessageComponent, {
        data: customers
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
