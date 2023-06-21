import React, { Fragment, useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    /*
      Kodun <AuthContextProvider> yerine <Fragment> ile çevrelenmesinin nedeni   
      => Provider ve consumer aynı kod içinde bulunamaz. Yani aynı component içinde hem provide edilip hem de
      tüketilemez. Bu yüzden index.js içinde çevrelenir.
    */
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
