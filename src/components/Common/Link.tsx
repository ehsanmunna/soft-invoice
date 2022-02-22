import { Ilink } from "../../interface/Common";

const AppLink = (props: Ilink) => <a href={props.href}>{props.linkText}</a>;

export default AppLink