import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import fb from "../../services/firebase";
import { initialValues, validationSchema } from "./formikConfig";
import { AuthFormField, ServerError } from "../../components/AuthFormField";
import "./Signup.css";

function Signup() {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  return (
    <div className="Signup">
      <h2 className="logo auth-logo">Forms</h2>
      <div className="auth-form-wrapper">
        <div className="auth-form-container">
          <h1>Sign up</h1>
          <Formik
            onSubmit={() => {
              console.log("Submitted");
            }}
            validateOnMount={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <AuthFormField label="Username" name="username" />
                <AuthFormField label="Email" name="email" autoComplete="on" />
                <AuthFormField
                  label="Password"
                  name="password"
                  type="password"
                />
                <AuthFormField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />

                <button
                  className="auth-button"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Sign up
                </button>

                <div className="auth-link-container">
                  Already have an account?
                  <span
                    className="auth-link"
                    onClick={() => {
                      history.push("login");
                    }}
                  >
                    Login
                  </span>
                </div>
              </Form>
            )}
          </Formik>
          <ServerError serverError={serverError} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
