import "./email-password-form.style.css";

const EmailPasswordForm = ({ submitHandler, changeHandler, form }) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up With Email and Password</h1>
      <form className="sign-in-form" onSubmit={submitHandler}>
        <div className="field-container">
          <label className="label-name">Display Name</label>
          <input
            className="inp"
            type="text"
            required
            onChange={changeHandler}
            name="displayName"
            value={form.displayName}
          />
        </div>
        <div className="field-container">
          <label className="label-name">Email</label>
          <input
            className="inp"
            type="text"
            required
            onChange={changeHandler}
            name="email"
            value={form.email}
          />
        </div>
        <div className="field-container">
          <label className="label-name">Password</label>
          <input
            className="inp"
            type="text"
            required
            onChange={changeHandler}
            name="password"
            value={form.password}
          />
        </div>
        <div className="field-container">
          <label className="label-name">Confirm Password</label>
          <input
            className="inp"
            type="text"
            required
            onChange={changeHandler}
            name="confirmPassword"
            value={form.confirmPassword}
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

export default EmailPasswordForm;
