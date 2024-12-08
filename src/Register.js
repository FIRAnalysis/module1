import React, { useState } from "react";
import "./styles/Register.css";
import { auth, GoogleAuthProvider, signInWithPopup } from "./firebaseConfig"; // Import v9+ methods
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the method from firebase/auth
import { Link } from "react-router-dom";
import Layout from "./Layout/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle Google Sign-up
  const googleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google signup successful:", user);
      alert("Account created with Google");
    } catch (error) {
      console.error("Error during Google signup:", error);
      alert(error.message);
    }
  };

  // Function to handle form submission for email/password signup
  const submit = async (e) => {
    e.preventDefault(); // Prevent form default behavior (page reload)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        alert("Account Created Successfully");
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
              <header>Register</header>
              <form onSubmit={submit}>
                {" "}
                {/* Use onSubmit for form handling */}
                <div className="field input-field">
                  <input
                    type="text"
                    value={name}
                    placeholder="UserName"
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                  />
                </div>
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
                    placeholder="Create Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="field button-field">
                  <button type="submit">Register</button>{" "}
                  {/* Change to type="submit" */}
                </div>
              </form>
              <div className="form-link">
                <span>
                  Already have an account?{" "}
                  <Link to="/login" className="link signup-link">
                    Login
                  </Link>
                </span>
              </div>
            </div>
            <div className="line"></div>
            {/* Google Signup button */}
            <div className="media-options">
              <button onClick={googleSignup} className="field google">
                <img
                  src="https://logopng.com.br/logos/google-37.png"
                  alt="Google"
                  className="google-img"
                />
                <span>Sign Up with Google</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Register;
