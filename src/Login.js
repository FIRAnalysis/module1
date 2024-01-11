import React, { useState } from 'react'
import './styles/Register.css'
import firebase from './firebaseConfig'
import { Link } from 'react-router-dom'
import Layout from './Layout/Layout'

const Login = () => {
   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submit = async(e) =>
    {
           e.preventDefault()
           try {
            const user = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(user){
                alert("Login Successfully")
            }
           } catch (error) {
            alert(error)
           }
    }
  return (
<Layout>

<div>
  <section className="container forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form action="#">
                    
                        <div className="field input-field">
                            <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="password" value={password} placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} className="input"/>
                        </div>
                        
                       
                        
                        <div className="field button-field">
                            <button onClick={submit}>Login</button>
                        </div>
                    </form>
                    <div className="form-link">
                        <span>Don't have an account? <Link to="/" className="link signup-link">Register</Link></span>
                    </div>
                </div>
                <div className="line"></div>
               
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="#" alt="" className="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
         
            
        </section>

    </div>

</Layout>

   
  )
}

export default Login
