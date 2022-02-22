import { ILogo } from "../../interface/Media";

const AppLogo = (props: ILogo) => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default AppLogo