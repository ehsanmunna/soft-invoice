import { Box } from "@mui/material";
import { appStyle } from "../../Shared/global.const";

const FormBox = (props: any) => {
    return (<Box style={{ paddingTop: appStyle.forms_padding, paddingBottom: appStyle.forms_padding }}>
      {props.children}
    </Box>
)};

export default FormBox