import React, { useState } from "react";
import { authenticate } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authenticate({ email, password, method: "login" }));
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="email">
          <small>email</small>
        </label>
        <input name="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">
          <small>Password</small>
        </label>
        <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>

    </>

  );
};

export default Login;
