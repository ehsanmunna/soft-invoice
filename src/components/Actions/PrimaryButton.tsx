import Button from "@mui/material/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AppButtonPrimary = (props: any) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(props.link, {replace: false}), [navigate]);
    return (<Button variant="contained" size="large" style={{width: '100%'}} onClick={handleOnClick}>{props.btnText}</Button>
)};

export default AppButtonPrimary