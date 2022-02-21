import TextField from "@mui/material/TextField";

const AppTextInput = (props: any) => 
    <TextField type="text" label={props.placeholder} variant="outlined" style={{width: '100%'}} placeholder={props.placeholder} />;

export default AppTextInput