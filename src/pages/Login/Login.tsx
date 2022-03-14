import AppLink from "../../components/Common/Link";
import AppTextInput from "../../components/FormElement/TextInput";
import AppTextPassword from "../../components/FormElement/TextPassword";
import FormBox from "../../components/Layout/FormBox";
import FormContainer from "../../components/Layout/FormContainer";
import PageContainer from "../../components/Layout/PageContainer";
import AppLogo from "../../components/Media/Logo";
import AppTitle from "../../components/Typography/Title";

function LoginPage() {
  return (
    <PageContainer>
      <div>
        <AppLogo src="" alt="Logo" />
      </div>
      <FormContainer
        formHeadLine="Login to your account"
        formBody={(
          <>
            <FormBox>
              <AppTextInput placeholder="email/phone" />
            </FormBox>
            <FormBox>
              <AppTextPassword placeholder="password" />
            </FormBox>
          </>
        )}
        buttonText="Login"
        btnEvent={console.log('login clicked')}
        formExtra={(
          <p>Not registared? please <AppLink href="/registration" linkText="click here" /></p>
        )}
      />
    </PageContainer>
  );
}

export default LoginPage;
