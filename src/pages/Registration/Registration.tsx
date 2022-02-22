import { Box, Container, Grid } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppLink from "../../components/Common/Link";
import AppTextInput from "../../components/FormElement/TextInput";
import AppTextPassword from "../../components/FormElement/TextPassword";
import FormContainer from "../../components/Layout/FormContainer";
import AppLogo from "../../components/Media/Logo";
import AppTitle from "../../components/Typography/Title";

const padding = 10;

function Registration() {
  return (
    <>
      <div>
        <AppLogo src="" alt="Logo" />
      </div>
      <div>
        <AppTitle name="Be a member" />
      </div>
      
      <FormContainer
        formBody={(
          <>
          <Box style={{ padding: padding }}>
            <AppTextInput placeholder="first name" />
          </Box>
          <Box style={{ padding: padding }}>
          <AppTextInput placeholder="last name" />
          </Box>
          <Box style={{ padding: padding }}>
            <AppTextInput placeholder="email/phone" />
          </Box>
          <Box style={{ padding: padding }}>
            <AppTextPassword placeholder="password" />
          </Box>
          <Box style={{ padding: padding }}>
            <AppTextPassword placeholder="password confirm" />
          </Box>
          </>
        )}
        buttonText="Create Account"
        formExtra={(
          <p>already registared? please <AppLink href="#" linkText="login" /></p>
        )}
      />
    </>
  );
}

export default Registration;
