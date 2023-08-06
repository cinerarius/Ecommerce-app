import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserdocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.style.css";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormField = () => {
    setFormField(defaultFormField);
  };

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
          <label className="label-name">Display Name</label>
          <input
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </div>
        <div className="field-container">
          <label className="label-name">Email</label>
          <input
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="field-container">
          <label className="label-name">Password</label>
          <input
            className="inp"
            type="text"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="field-container">
          <label className="label-name">Confirm Password</label>
          <input
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
