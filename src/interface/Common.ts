export interface IPropsCommon{
    children: any;
}

export interface Ilink{
    linkText: string;
    href: string;
}

export interface ITableContainer extends IPropsCommon{
    subtitle?: string;
}