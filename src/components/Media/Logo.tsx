import { ILogo } from "../../interface/Media";

const AppLogo = (props: ILogo) => <img src={props.src} alt={props.alt} />;

export default AppLogo