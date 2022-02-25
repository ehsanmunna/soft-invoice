import AppLink from "../../components/Common/Link";
import AppTextInput from "../../components/FormElement/TextInput";
import AppTextPassword from "../../components/FormElement/TextPassword";
import FormBox from "../../components/Layout/FormBox";
import FormContainer from "../../components/Layout/FormContainer";
import AppLogo from "../../components/Media/Logo";

function Registration() {
  return (
    <>
      <div>
        <AppLogo src="" alt="Logo" />
      </div>
      <FormContainer
        formHeadLine="Be a member"
        formBody={(
          <>
          <FormBox>
            <AppTextInput placeholder="first name" />
          </FormBox>
          <FormBox>
          <AppTextInput placeholder="last name" />
          </FormBox>
          <FormBox>
            <AppTextInput placeholder="email/phone" />
          </FormBox>
          <FormBox>
            <AppTextPassword placeholder="password" />
          </FormBox>
          <FormBox>
            <AppTextPassword placeholder="password confirm" />
          </FormBox>
          </>
        )}
        buttonText="Create Account"
        formExtra={(
          <p>already registared? please <AppLink href="/login" linkText="login" /></p>
        )}
      />
    </>
  );
}

export default Registration;
