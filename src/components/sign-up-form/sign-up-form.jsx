import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserdocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.style.css";
import EmailPasswordForm from "../email-password-form/email-password-form.component";

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
    <div>
      <EmailPasswordForm
        form={formField}
        submitHandler={handleSubmit}
        changeHandler={handleChange}
      />
    </div>
  );
};

export default SignUpForm;
