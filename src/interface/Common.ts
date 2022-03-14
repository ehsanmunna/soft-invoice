export interface IPropsCommon{
    children: any;
}

export interface Ilink{
    linkText: string;
    href: string;
}

export interface IPrimaryButton{
    btnText: string,
    handleOnClick?: () => any
}

export interface IPrimaryLinkButton extends Ilink{ }

export interface ITableContainer extends IPropsCommon{
    subtitle?: string;
}