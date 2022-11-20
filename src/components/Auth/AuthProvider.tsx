import React, { createContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface IAuth {
  token: string;
  getAuth: boolean;
}

interface IAuthContext {
  auth: IAuth;
  setAuth: (state: IAuth) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState({ token: "", getAuth: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
