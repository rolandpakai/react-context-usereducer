import { useContext } from "react";
import { GlobalState } from "../store/global/global.state";

const DisplayAuth = () => {
  const { isLoggedIn, login, logout } = useContext(GlobalState);

  return (
    <>
      <div>{isLoggedIn ? "Welcome" : "Please login"}</div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default DisplayAuth;