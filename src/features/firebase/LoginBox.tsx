import React, { useState } from "react";
import { auth } from "./app";
import firebase from "firebase";

export function LoginBox() {
  const [loginname, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  function handlelogin(e: any) {
    setLoginName(e.target.value);
  }
  function handlepassword(e: any) {
    setPassword(e.target.value);
  }

  function login() {
    firebase.auth().signInWithEmailAndPassword(loginname, password);
  }

  return (
    <div>
      <div>
        <h2>Auth</h2>
        <label>
          Email:
          <input type="text" value={loginname} onChange={handlelogin} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlepassword} />
        </label>

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
