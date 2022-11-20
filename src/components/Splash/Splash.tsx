import React, { useState, useEffect, useContext } from "react";
import { usePostAuthLoginMutation } from "../../store/rpgApi";
import { AuthContext } from "../Auth/AuthProvider";

export default function Splash() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(AuthContext);
  const [loginUser, response] = usePostAuthLoginMutation();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(value);
    console.log("username", username);
    console.log("password", password);

    loginUser({
      userLoginDto: { username: username, password: password },
    })
      .unwrap()
      .then((payload) => {
        if (payload.data) {
          value?.setAuth({
            token: payload.data,
            getAuth: true,
          })
					console.log(payload.data)
        } else {
          console.log("unable to login");
        }
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
          placeholder="Enter Password"
        />
        <input type="submit" onClick={handleLogin} value="Submit" />
      </form>
    </div>
  );
}
