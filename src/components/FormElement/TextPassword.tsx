import TextField from "@mui/material/TextField";

const AppTextPassword = (props: any) => 
    <TextField type="password" label={props.placeholder} variant="outlined" style={{width: '100%'}} placeholder={props.placeholder} />;

export default AppTextPassword