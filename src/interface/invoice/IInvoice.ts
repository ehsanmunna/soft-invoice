export interface IInvoice{
    name: string;
    date: string;
    amount: number;
}

export interface IInvoiceTotalSummery{
    grossTotal: number;
    discount: number;
    netTotal: number;
}