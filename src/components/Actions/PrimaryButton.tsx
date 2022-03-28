import Button from "@mui/material/Button";
<<<<<<< Updated upstream
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AppButtonPrimary = (props: any) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(props.link, {replace: false}), [navigate]);
    return (<Button variant="contained" size="large" style={{width: '100%'}} onClick={handleOnClick}>{props.btnText}</Button>
=======
import { ThemeProvider } from '@mui/material/styles';
import { IPrimaryButton } from "../../interface/Common";
import { appTheme } from "../../Shared/global.const";




const AppButtonPrimary = (props: IPrimaryButton) => {
    return (
        <ThemeProvider theme={appTheme}>
            <Button variant="contained" size="large" style={{width: '100%'}} onClick={props.handleOnClick}>{props.btnText}</Button>
        </ThemeProvider>
>>>>>>> Stashed changes
)};

export default AppButtonPrimary