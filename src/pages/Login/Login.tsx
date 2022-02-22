import { Box } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppLink from "../../components/Common/Link";
import AppTextInput from "../../components/FormElement/TextInput";
import AppTextPassword from "../../components/FormElement/TextPassword";
import FormContainer from "../../components/Layout/FormContainer";
import AppLogo from "../../components/Media/Logo";
import AppTitle from "../../components/Typography/Title";

const padding = 10;

function LoginPage() {
  return (
    <>
      <div>
        <AppLogo src="" alt="Logo" />
      </div>
      <div>
        <AppTitle name="Login to your account" />
      </div>
      <FormContainer
        formBody={(
          <>
            <Box style={{ padding: padding }}>
              <AppTextInput placeholder="email/phone" />
            </Box>
            <Box style={{ padding: padding }}>
              <AppTextPassword placeholder="password" />
            </Box>
          </>
        )}
        buttonText="Login"
        formExtra={(
          <p>Not registared? please <AppLink href="#" linkText="click here" /></p>
        )}
      />
    </>
  );
}

export default LoginPage;
