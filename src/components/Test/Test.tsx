import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

export default function Test() {

        const value = useContext(AuthContext)

  return <div>{value?.auth.token}</div>;
}
