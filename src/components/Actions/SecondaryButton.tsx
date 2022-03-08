import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../../Shared/global.const";

const AppButtonSecondary = (props: any) => (
    <ThemeProvider theme={appTheme}>
        <Button variant="contained" color="secondary">{props.btnText}</Button>
    </ThemeProvider>
);

export default AppButtonSecondary