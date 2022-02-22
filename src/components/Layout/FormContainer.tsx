import { Container } from "@mui/material";
import AppButtonPrimary from "../Actions/PrimaryButton";

const FormContainer = (props: any) => {
    return (<Container maxWidth="sm">
        <div>
        <form>
          {props.formBody}
        </form>
        <div>
            <AppButtonPrimary btnText={props.buttonText} />
            {props.buttonExtra}
        </div>
      </div>
      <div>
        {props.formExtra}
      </div>
    </Container>)
};

export default FormContainer