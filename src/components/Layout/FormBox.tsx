import { Box } from "@mui/material";
import { appStyle } from "../../Shared/global.const";

const FormBox = (props: any) => {
    return (<Box style={{ padding: appStyle.forms_padding }}>
      {props.children}
    </Box>)
};

export default FormBox