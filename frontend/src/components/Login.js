import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    // sending signup data to backend API
    // axios.post('http://localhost:5000/register', {name, email, username, password})
    // axios
    //   .post("http://localhost:5000/login", { email, password })
    //   .then((result) => {
    //     console.log(result);
    //     // if(result.data==="Success"){
    //     //   navigate('home')
    //     // }
    //   })
    //   .catch((err) => console.log(err));
    axios
  .post("http://localhost:5000/login", { email, password })
  .then((result) => {
    console.log(result.data); // Log the response data
    if (result.data === "Success") {
      // Handle successful login, like navigating to another page
      console.log("Login Successful");
    } else {
      console.log("Login Failed: " + result.data);
    }
  })
  .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>login</h2>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
