import { Grid } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppLink from "../../components/Common/Link";
import AppTextInput from "../../components/FormElement/TextInput";
import AppTextPassword from "../../components/FormElement/TextPassword";
import AppLogo from "../../components/Media/Logo";
import AppTitle from "../../components/Typography/Title";

function Registration() {
    return (
      <>
        <div>
          <AppLogo src="" alt="Logo"/>
        </div>
        <div>
          <AppTitle name="Be a member"/>
        </div>
        <Grid container spacing={2}>
          <Grid item>item 1</Grid>
          <Grid item>item 2</Grid>
          <Grid item>item 3</Grid>
        </Grid>
        <div>
          <form>
            <div>
              <AppTextInput placeholder="first name"/>
            </div>
            <div>
              <AppTextInput placeholder="last name"/>
            </div>
            <div>
              <AppTextInput placeholder="email/phone"/>
            </div>
            <div>
              <AppTextPassword placeholder="password"/>
            </div>
            <div>
              <AppTextPassword placeholder="password confirm"/>
            </div>
          </form>
          <AppButtonPrimary btnText="Create Account"/>
        </div>
        <div>
          <p>already registared? please <AppLink href="#" linkText="login"/></p>
        </div>
      </>
    );
  }
  
  export default Registration;
  