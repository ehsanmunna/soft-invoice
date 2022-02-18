import TextField from "@mui/material/TextField";

const AppTextInput = (props: any) => 
    <TextField type="text" label={props.placeholder} variant="outlined" placeholder={props.placeholder} />;

export default AppTextInput