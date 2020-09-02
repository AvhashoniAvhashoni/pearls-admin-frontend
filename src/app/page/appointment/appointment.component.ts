import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetComponent } from './set/set.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public get addAppointment(): any {
    const dialogRef = this._dialog.open(SetComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    return null;
  }
}
