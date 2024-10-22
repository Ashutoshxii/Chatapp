import React, { useState } from "react";
import axios from 'axios';

const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // when form is submitted 

    const handleSubmit = (e)=>{
        e.preventDefault()
        // sending signup data to backend API
        // axios.post('http://localhost:5000/register', {name, email, username, password})
        axios.post('http://localhost:5000/signup', {name, email, username, password})
        .then(result =>console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" autoComplete="off" required onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" autoComplete="off" required onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
          <label>Username: </label>
          <input type="text" name="username" autoComplete="off" required onChange={(e)=>setUsername(e.target.value)}/>
        </div>

        <div>
          <label>Password: </label>
          <input type="password" name="password" autoComplete="off" required onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
