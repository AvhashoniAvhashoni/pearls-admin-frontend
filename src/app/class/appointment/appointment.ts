import { Time } from '@angular/common';

// id: number;
// customer_id: string;
// date: Date;
// time: Time;
// service_type: string;
// comment: string;
// confirmed: boolean;
// postpone: boolean;
// num_postpone: number;
// cancelled: boolean;

// id: number, customer_id: string, date: Date, time: Time, service_type: string, comment: string, confirmed: boolean, postpone: boolean, num_postpone: number, cancelled: boolean

export class Appointment {
    private id?: number;
    private customer_id: string;
    private date: Date;
    private time: Time;
    private service_type: string;
    private comment?: string;
    private confirmed?: boolean;
    private postpone?: boolean;
    private num_postpone?: number;
    private cancelled?: boolean;

    constructor(appointment: Appointment) {
        this.id = appointment.id;
        this.customer_id = appointment.customer_id;
        this.date = appointment.date;
        this.time = appointment.time;
        this.service_type = appointment.service_type;
        this.comment = appointment.comment;
        this.confirmed = appointment.confirmed;
        this.postpone = appointment.postpone;
        this.num_postpone = appointment.num_postpone;
        this.cancelled = appointment.cancelled;
    }

    public get get_id(): number {
        return this.id;
    }

    public set_id(id: number) {
        this.id = id;
    }

    public get get_customer_id(): string {
        return this.customer_id;
    }

    public set_customer_id(customer_id: string) {
        this.customer_id = customer_id;
    }

    public get get_date(): Date {
        return this.date;
    }

    public set_date(date: Date) {
        this.date = date;
    }

    public get get_time(): Time {
        return this.time;
    }

    public set_time(time: Time) {
        this.time = time;
    }

    public get get_service_type(): string {
        return this.service_type;
    }

    public set_service_type(service_type: string) {
        this.service_type = service_type;
    }

    public get get_comment(): string {
        return this.comment;
    }

    public set_comment(comment: string) {
        this.comment = comment;
    }

    public get get_confirmed(): boolean {
        return this.confirmed;
    }

    public set_confirmed(confirmed: boolean) {
        this.confirmed = confirmed;
    }

    public get get_postpone(): boolean {
        return this.postpone;
    }

    public set_postpone(postpone: boolean) {
        this.postpone = postpone;
    }

    public get get_num_postpone(): number {
        return this.num_postpone;
    }

    public set_num_postpone(num_postpone: number) {
        this.num_postpone = num_postpone;
    }

    public get get_cancelled(): boolean {
        return this.cancelled;
    }

    public set_cancelled(cancelled: boolean) {
        this.cancelled = cancelled;
    }
}
