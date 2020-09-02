import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'userId', 'date', 'service', 'confirmed'];
  appointments: any[] = [
    { id: 1, userId: "usljkjask", date: new Date(), service: "Ice cream", confirmed: false },
    { id: 2, userId: "bsljkjask", date: new Date(), service: "Frozen yogurt", confirmed: false },
    { id: 3, userId: "dsljkjask", date: new Date(), service: "Eclair", confirmed: true },
    { id: 7, userId: "zsljkjask", date: new Date(), service: "Cupcake", confirmed: false },
    { id: 9, userId: "psljkjask", date: new Date(), service: "Gingerbread", confirmed: true },
    { id: 4, userId: "qsljkjask", date: new Date(), service: "sandwich", confirmed: false },
  ];

  appointment: any[];
  constructor() {
    this.appointment = this.appointments.slice();
  }

  ngOnInit(): void { }

  sortData(sort: Sort) {
    const data = this.appointments.slice();
    if (!sort.active || sort.direction === '') {
      this.appointment = data;
      return;
    }
    this.appointment = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'userId': return compare(a.userId, b.userId, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'service': return compare(a.service, b.service, isAsc);
        case 'confirmed': return compare(a.confirmed, b.confirmed, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string | boolean | Date, b: number | string | boolean | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
