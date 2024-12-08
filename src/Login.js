import React, { useState } from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "./firebaseConfig"; // Named imports from firebaseConfig
import "./styles/Register.css";
import { Link } from "react-router-dom";
import Layout from "./Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle Google login
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google login successful:", user);
      alert("Logged in with Google");
    } catch (error) {
      console.error("Error during Google login:", error);
      alert(error.message);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      if (user) {
        alert("Logged in successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <div>
        <section className="container forms">
          <div className="form login">
            <div className="form-content">
              <header>Login</header>
              <form action="#">
                <div className="field input-field">
                  <input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="field input-field">
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="field button-field">
                  <button type="submit" onClick={submit}>
                    Login
                  </button>
                </div>
              </form>
              <div className="form-link">
                <span>
                  Don't have an account?{" "}
                  <Link to="/register" className="link signup-link">
                    Register
                  </Link>
                </span>
              </div>
            </div>
            <div className="line"></div>
            {/* Google Login button */}
            <div className="media-options">
              <button onClick={googleLogin} className="field google">
                <img
                  src="https://logopng.com.br/logos/google-37.png"
                  alt="Google"
                  className="google-img"
                />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Login;
