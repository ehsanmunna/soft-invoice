import { ITitle } from "../../interface/Title";


const AppTitle = (props: ITitle) => <h1 style={{textAlign: 'center'}}>{props.name}</h1>;

export default AppTitle