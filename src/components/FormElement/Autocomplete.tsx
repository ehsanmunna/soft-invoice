import { Autocomplete, TextField } from "@mui/material";
import { IAutocompleteOption } from "../../interface/Input";

const AppAutocomplete = (props: IAutocompleteOption) => {
    return (
        <Autocomplete
            disablePortal
            options={props.options}
            style={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label={props.label} />}
        />
    )};
export default AppAutocomplete