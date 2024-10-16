import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
    <form className="login-form" autoComplete="off">
  <h2>Login</h2>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" id="username" name="username" autoComplete="off" required />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" autoComplete="off" required />
  </div>
  <button type="submit" className="login-button">Login</button>
</form>

  </div>
  )
}

export default Login
