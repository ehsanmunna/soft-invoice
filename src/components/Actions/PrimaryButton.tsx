import Button from "@mui/material/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from "../../Shared/global.const";


const AppButtonPrimary = (props: any) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(props.link, {replace: false}), [navigate]);
    return (
        <ThemeProvider theme={appTheme}>
            <Button variant="contained" size="large" style={{width: '100%'}} onClick={handleOnClick}>{props.btnText}</Button>
        </ThemeProvider>
    
)};

export default AppButtonPrimary