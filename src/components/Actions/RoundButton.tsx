import { IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const AppButtonRound = (props: any) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(props.link, {replace: false}), [navigate]);
    return (
        // <a href={props.link}>{props.linktext}</a>    
        <IconButton color="primary" aria-label={props.linktext} size="large" onClick={handleOnClick}>
            <AddCircleIcon />
        </IconButton>
    )};

export default AppButtonRound