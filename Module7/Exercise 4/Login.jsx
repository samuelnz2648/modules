// Login.jsx
import React from "react";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
