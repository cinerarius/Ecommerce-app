import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserdocumentFromAuth,
} from "../../../public/utils/firebase/firebase.utils";

import "./sign-up-form.style.css";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormField = () => {};

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserdocumentFromAuth(user, { displayName });
      resetFormField;
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email Already Exist");
      } else {
        console.log("user created faced a error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up With Email and Password</h1>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="field-container">
          <FormInput
            label="Display Name"
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </div>
        <div className="field-container">
          <FormInput
            label="Email"
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="field-container">
          <FormInput
            label="Password"
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="field-container">
          <FormInput
            label="Confirm Password"
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>
        <div className="sign-up-btn-container">
          <button className="sign-up-btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
