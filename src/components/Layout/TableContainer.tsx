import { Box } from "@mui/material";
import { ITableContainer } from "../../interface/Common";
import AppSubTitle from "../Typography/SubTitle";
const AppTableContainer = (props: ITableContainer) => {
  return (
    <Box>
      <AppSubTitle name={props.subtitle}/>
      {props.children}
    </Box>
  )};

export default AppTableContainer;