import "./form-input.style.css";

const FormInput = ({ label, submitHandler, ...otherProps }) => {
  return (
    <div className="field-container">
      <label className="label-name">{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
