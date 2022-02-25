import { ITitle } from "../../interface/Title";


const AppTitle = (props: ITitle) => {
    const direction: any = props.direction ? props.direction : 'center';
    return (
        <h1 style={{textAlign: direction}}>{props.name}</h1>
    )};

export default AppTitle