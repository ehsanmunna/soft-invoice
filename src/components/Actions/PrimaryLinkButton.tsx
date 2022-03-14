import Button from "@mui/material/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from "../../Shared/global.const";
import { IPrimaryLinkButton } from "../../interface/Common";
import { Link } from "@mui/material";

const AppLinkButtonPrimary = (props: IPrimaryLinkButton) => {
    
    return (
        <ThemeProvider theme={appTheme}>
            {/* <Button variant="contained" size="large" style={{width: '100%'}}>{props.linkText}</Button> */}
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
            Button Link
            </Link>
        </ThemeProvider>
    
)};

export default AppLinkButtonPrimary