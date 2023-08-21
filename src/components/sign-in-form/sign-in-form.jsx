import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.css";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFormField = () => {};

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField;
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Email not found");
          break;
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="form-title">Sign In With Email and Password</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="flex flex-row items-center justify-center">
            <button
              className="bg-blue-500 rounded-xl px-8 py-2 text-center font-sans font-bold text-white my-4 mx-2 "
              type="submit"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-orange-500 font-sans font-bold px-8 py-2 rounded-xl text-white"
              onClick={signInWithGoogle}
            >
              Google Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
