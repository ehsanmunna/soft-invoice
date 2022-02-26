export interface IAddress{
    addressLine1: string;
    phone: string;
    email: string;
}

export interface ICompanyAddress extends IAddress{
    companyName: string;
}

export interface ICustomerAddress extends IAddress{
    customerName: string;
}