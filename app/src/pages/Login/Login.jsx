import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import fb from "../../services/firebase";
import { initialValues, validationSchema } from "./formikConfig";
import { AuthFormField, ServerError } from "../../components/AuthFormField";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  const login = ({ email, password }, { setSubmitting }) => {
    fb.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (!res.user) {
          setServerError("Trouble logging in.");
        }
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setServerError("Invalid credentials");
        } else if (err.code === "auth/user-not-found") {
          setServerError("Email not registered");
        } else {
          setServerError("Something went wrong");
        }
      })
      .finally(() => {
        setSubmitting(false);
        localStorage.setItem("userId", fb.auth.currentUser?.uid);
      });
  };

  return (
    <div className="Login">
      <h2 className="logo auth-logo">Forms</h2>
      <div className="auth-form-wrapper">
        <div className="auth-form-container">
          <h1>Log in</h1>
          <Formik
            onSubmit={login}
            validateOnMount={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <AuthFormField label="Email" name="email" autoComplete="on" />
                <AuthFormField
                  label="Password"
                  name="password"
                  type="password"
                />

                <button
                  className="auth-button"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Log in
                </button>

                <div className="auth-link-container">
                  Don't have an account?
                  <span
                    className="auth-link"
                    onClick={() => {
                      history.push("signup");
                    }}
                  >
                    Sign Up
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

export default Login;
