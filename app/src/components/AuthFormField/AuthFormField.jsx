import { Field, ErrorMessage } from "formik";
import "./AuthFormField.css";

export function AuthFormField({
  name,
  label,
  type = "text",
  autoComplete = "off",
}) {
  return (
    <label>
      <Field
        className="auth-form-field"
        type={type}
        name={name}
        placeholder={label}
        autoComplete={autoComplete}
      />
      <div className="error-container">
        <ErrorMessage className="error" component="p" name={name} />
      </div>
    </label>
  );
}

export function ServerError({ serverError }) {
  return (
    <div className="error-container">
      <div className="error">{serverError}</div>
    </div>
  );
}
