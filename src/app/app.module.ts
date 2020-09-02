import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { AppointmentComponent } from './page/appointment/appointment.component';
import { SetComponent } from './page/appointment/set/set.component';
import { UpcommingComponent } from './page/appointment/upcomming/upcomming.component';
import { ContactComponent } from './page/contact/contact.component';
import { AddcontactComponent } from './page/contact/addcontact/addcontact.component';
import { CustomerComponent } from './page/contact/customer/customer.component';
import { _CoalescedStyleScheduler } from '@angular/cdk/table';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NotificationComponent } from './page/notification/notification.component';
import { TodayComponent } from './page/appointment/today/today.component';
import { UpdatecontactComponent } from './page/contact/updatecontact/updatecontact.component';
import { MessageComponent } from './page/contact/customer/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppointmentComponent,
    SetComponent,
    UpcommingComponent,
    ContactComponent,
    AddcontactComponent,
    CustomerComponent,
    DashboardComponent,
    NotificationComponent,
    TodayComponent,
    UpdatecontactComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [_CoalescedStyleScheduler],
  bootstrap: [AppComponent]
})
export class AppModule { }
