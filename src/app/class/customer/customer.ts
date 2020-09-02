export class Customer {
    private id?: string;
    private cell: string;
    private next_of_kin_cell: string;
    private email: string;
    private first_name: string;
    private last_name: string;
    private nick_name: string;
    private date_of_birth: Date;
    private date_added: Date;
    private subscribe: boolean;
    private active: boolean;
    private date_deactive: Date;
    private address_line_1: string;
    private address_line_2: string;
    private city: string;
    private province: string;
    private zip_code: string;

    constructor(customer: Customer) {
        this.id = customer.id;
        this.cell = customer.cell;
        this.next_of_kin_cell = customer.next_of_kin_cell;
        this.email = customer.email;
        this.first_name = customer.first_name;
        this.last_name = customer.last_name;
        this.nick_name = customer.nick_name;
        this.date_of_birth = customer.date_of_birth;
        this.date_added = customer.date_added;
        this.subscribe = customer.subscribe;
        this.active = customer.active;
        this.date_deactive = customer.date_deactive;
        this.address_line_1 = customer.address_line_1;
        this.address_line_2 = customer.address_line_2;
        this.city = customer.city;
        this.province = customer.province;
        this.zip_code = customer.zip_code;
    }

    public set_customer(customer: Customer): void {
        this.cell = customer.cell;
        this.next_of_kin_cell = customer.next_of_kin_cell;
        this.email = customer.email;
        this.first_name = customer.first_name;
        this.last_name = customer.last_name;
        this.nick_name = customer.nick_name;
        this.date_of_birth = customer.date_of_birth;
        this.subscribe = customer.subscribe;
        this.active = customer.active;
        this.address_line_1 = customer.address_line_1;
        this.address_line_2 = customer.address_line_2;
        this.city = customer.city;
        this.province = customer.province;
        this.zip_code = customer.zip_code;
    }

    public set_id(id: string): void {
        this.id = id;
    }

    public set_cell(cell: string): void {
        this.cell = cell;
    }

    public set_next_of_kin_cell(next_of_kin_cell: string): void {
        this.next_of_kin_cell = next_of_kin_cell;
    }

    public set_email(email: string): void {
        this.email = email;
    }

    public set_first_name(first_name: string): void {
        this.first_name = first_name;
    }

    public set_last_name(last_name: string): void {
        this.last_name = last_name;
    }

    public set_nick_name(nick_name: string): void {
        this.nick_name = nick_name;
    }

    public set_date_of_birth(date_of_birth: Date): void {
        this.date_of_birth = date_of_birth;
    }

    public set_date_added(date_added: Date): void {
        this.date_added = date_added;
    }

    public set_subscribe(subscribe: boolean): void {
        this.subscribe = subscribe;
    }

    public set_active(active: boolean): void {
        this.active = active;
    }

    public set_date_deactive(date_deactive: Date): void {
        this.date_deactive = date_deactive;
    }

    public set_address_line_1(address_line_1: string): void {
        this.address_line_1 = address_line_1;
    }

    public set_address_line_2(address_line_2: string): void {
        this.address_line_1 = address_line_2;
    }

    public set_city(city: string): void {
        this.city = city;
    }

    public set_province(province: string): void {
        this.province = province;
    }

    public set_zip_code(zip_code: string): void {
        this.zip_code = zip_code;
    }

    public get get_id(): string {
        return this.id;
    }

    public get get_cell(): string {
        return this.cell;
    }

    public get get_next_of_kin_cell(): string {
        return this.next_of_kin_cell;
    }

    public get get_email(): string {
        return this.email
    }

    public get get_first_name(): string {
        return this.first_name;
    }

    public get get_last_name(): string {
        return this.last_name;
    }

    public get get_nick_name(): string {
        return this.nick_name;
    }

    public get get_date_of_birth(): Date {
        return this.date_of_birth;
    }

    public get get_date_added(): Date {
        return this.date_added;
    }

    public get get_subscribe(): boolean {
        return this.subscribe;
    }

    public get get_active(): boolean {
        return this.active;
    }

    public get get_date_deactive(): Date {
        return this.date_deactive;
    }

    public get get_address_line_1(): string {
        return this.address_line_1;
    }

    public get get_address_line_2(): string {
        return this.address_line_2;
    }

    public get get_city(): string {
        return this.city;
    }

    public get get_province(): string {
        return this.province;
    }

    public get get_zip_code(): string {
        return this.zip_code;
    }
}