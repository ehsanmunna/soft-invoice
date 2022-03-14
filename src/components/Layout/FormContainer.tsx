import { Container } from "@mui/material";
import AppButtonPrimary from "../Actions/PrimaryButton";
import AppSubTitle from "../Typography/SubTitle";
import AppTitle from "../Typography/Title";
import FormBox from "./FormBox";
import PageContainer from "./PageContainer";

const FormContainer = (props: any) => {
  return (
    // <PageContainer>
    <>
      <div>
        {props.formHeadLine ? <div style={{ textAlign: 'center' }}>
          <AppTitle name={props.formHeadLine} />
        </div> : <></>}
        {props.formSubHeadLine ?
          <AppSubTitle name={props.formSubHeadLine} />
          : <></>}
        <form>
          {props.formBody}
        </form>
        <FormBox>
          {props.buttonText ? <AppButtonPrimary btnText={props.buttonText} handleOnClick={props.btnEvent} /> : <></>}
          {props.buttonExtra}
        </FormBox>
      </div>
      <FormBox>
        {props.formExtra}
      </FormBox>
    </>
    // </PageContainer>
  )
};

export default FormContainer