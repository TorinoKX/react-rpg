import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetFightQuery } from "./store/rpgApi";
import Splash from "./components/Splash/Splash";
import { AuthContext } from "./components/Auth/AuthProvider";
import Test from "./components/Test/Test";


function App() {

  const value = useContext(AuthContext);

  return (
    <div>
      {!value?.auth.getAuth && <Splash />}
      {value?.auth.getAuth && <Test />}
    </div>
  );
}

export default App;
