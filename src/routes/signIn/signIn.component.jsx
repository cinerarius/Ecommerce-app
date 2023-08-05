import {
  signInWithGooglePopup,
  createUserdocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./signIn.style.css";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserdocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is Sign In Page</h1>
      <button className="sign-in-btn" onClick={logGoogleUser}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
