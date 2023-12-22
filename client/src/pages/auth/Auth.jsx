import { useState } from "react";
import "./Auth.css";

import icon from "../../assets/icon.svg";
import AboutUs from "./AboutUs";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <section className="auth-section">
      {isSignUp && <AboutUs />}
      <div className="auth-container-2">
        {!isSignUp && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}

        <form>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Display name"
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignUp && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              id="password"
            />
            {isSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                {" "}
                Passwords must contain at least eight <br /> characters,
                including 1 letter and 1 <br /> number{" "}
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occassional, <br /> product updates, user
                research invitations,
                <br /> company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking the &quot;Sign up&quot;, you agree to ur{" "}
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of
                <br /> service{" "}
              </span>
              , <span style={{ color: "#007ac6" }}>privacy policy</span>{" "}
              <span style={{ color: "#007ac6" }}> and cookies policy.</span>
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "already have an account?" : "Don\t have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {" "}
            {isSignUp ? "Log in" : "Sign up"}{" "}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
