import AppButtonPrimary from "../../components/Actions/PrimaryButton";
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
            <AppTextInput placeholder="first name"/>
            <AppTextInput placeholder="last name"/>
            <AppTextInput placeholder="email/phone"/>
            <AppTextPassword placeholder="password"/>
            <AppTextPassword placeholder="password confirm"/>
          </form>
          <AppButtonPrimary btnText="Create Account"/>
        </div>
        <div>
          <p>already registared? please login</p>
        </div>
      </>
    );
  }
  
  export default Login;
  