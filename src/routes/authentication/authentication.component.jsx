import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./authentication.style.css";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <br />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
