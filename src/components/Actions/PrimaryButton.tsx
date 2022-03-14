import Button from "@mui/material/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from "../../Shared/global.const";
import { IPrimaryButton } from "../../interface/Common";



const AppButtonPrimary = (props: IPrimaryButton) => {
    return (
        <ThemeProvider theme={appTheme}>
            <Button variant="contained" size="large" style={{width: '100%'}} onClick={props.handleOnClick}>{props.btnText}</Button>
        </ThemeProvider>
    
)};

export default AppButtonPrimary