import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/class/customer/customer';
import { Appointment } from 'src/app/class/appointment/appointment';

const SERVER_URL = "http://localhost:8081/";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private customer_url: string = `${SERVER_URL}customer/`;
  private appointment_url: string = `${SERVER_URL}appointment/`;

  constructor(private _http: HttpClient) { }

  // Customers
  public getCustomers(): Observable<Array<Customer>> {
    return this._http.get<Array<Customer>>(this.customer_url);
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this._http.post<Customer>(this.customer_url, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this._http.put<Customer>(this.customer_url, customer);
  }

  //Messaging
  public postSMS(sms: any): Observable<any> {
    return this._http.post<any>(`${SERVER_URL}sms`, sms);
  }

  public postEmail(email: any): Observable<any> {
    return this._http.post<any>(`${SERVER_URL}email`, email);
  }

  //Appointments
  public getAppointments(): Observable<Array<Appointment>> {
    return this._http.get<Array<Appointment>>(this.appointment_url);
  }

  public getAppointment(id: number): Observable<Appointment> {
    return this._http.get<Appointment>(`${this.appointment_url}id`)
  }

  public getAppointmentsByDate(date: Date): Observable<Array<Appointment>> {
    return this._http.get<Array<Appointment>>(`${this.appointment_url}filed/date`);
  }

  public postAppointment(appointment: Appointment): Observable<Appointment> {
    return this._http.post<Appointment>(this.appointment_url, appointment);
  }

  public putAppointment(appointment: Appointment): Observable<Appointment> {
    return this._http.put<Appointment>(this.appointment_url, appointment);
  }
}
