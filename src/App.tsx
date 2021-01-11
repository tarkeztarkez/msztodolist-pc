import React, { useEffect } from "react";
import { LoginBox } from "./features/firebase/LoginBox";
import TodoBox from "./features/todos/TodoBox";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./features/firebase/app";

export const App = () => {
  const [user, loading, error] = useAuthState(auth);
  function logout() {
    auth.signOut();
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <section>{user ? <TodoBox /> : <LoginBox />}</section>
      )}
    </div>
  );
};
