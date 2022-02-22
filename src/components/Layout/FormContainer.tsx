import { Container } from "@mui/material";
import AppButtonPrimary from "../Actions/PrimaryButton";
import AppTitle from "../Typography/Title";
import FormBox from "./FormBox";

const FormContainer = (props: any) => {
  return (<Container maxWidth="sm">
    <div>
      <div style={{textAlign: 'center'}}>
        <AppTitle name={props.formHeadLine} />
      </div>
      <form>
        {props.formBody}
      </form>
      <FormBox>
        <AppButtonPrimary btnText={props.buttonText} />
        {props.buttonExtra}
      </FormBox>
    </div>
    <FormBox>
      {props.formExtra}
    </FormBox>
  </Container>)
};

export default FormContainer