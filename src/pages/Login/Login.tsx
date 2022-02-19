import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppLink from "../../components/Common/Link";
import AppTextInput from "../../components/FormElement/TextInput";
import AppTextPassword from "../../components/FormElement/TextPassword";
import AppLogo from "../../components/Media/Logo";
import AppTitle from "../../components/Typography/Title";

function Login() {
    return (
      <>
        <div>
          <AppLogo src="" alt="Logo"/>
        </div>
        <div>
          <AppTitle name="Login to your account"/>
        </div>
        <div>
          <form>
            <div>
            <AppTextInput placeholder="email/phone"/>
            </div>
            <div>
            <AppTextPassword placeholder="password"/>
            </div>
          </form>
          <AppButtonPrimary btnText="Login"/>
        </div>
        <div>
          <p>Not registared? please <AppLink href="#" linkText="click here"/></p>
        </div>
      </>
    );
  }
  
  export default Login;
  