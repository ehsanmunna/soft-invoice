import { Link } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { IPrimaryLinkButton } from "../../interface/Common";
import { appTheme } from "../../Shared/global.const";


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