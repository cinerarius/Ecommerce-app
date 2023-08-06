import SignUpForm from "../../components/sign-up-form/sign-up-form";
import {
  signInWithGooglePopup,
  createUserdocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./signIn.style.css";

const SignIn = () => {
  const logGoogleUserWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserdocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is Sign In Page</h1>
      <button className="sign-in-btn" onClick={logGoogleUserWithPopup}>
        Sign In With Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
