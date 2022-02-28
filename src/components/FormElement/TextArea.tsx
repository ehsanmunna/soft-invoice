import { TextareaAutosize, TextField } from "@mui/material";
import { IInput } from "../../interface/Input";

// const AppTextArea = ({props}:any) => <textarea {...props} cols={30} rows={10}></textarea>;
const AppTextArea = (props: IInput) => { 
    return (
        <TextField
          label={props.label}
          multiline
          maxRows={4}
          style={{width: '100%'}}
        />
    )};
export default AppTextArea