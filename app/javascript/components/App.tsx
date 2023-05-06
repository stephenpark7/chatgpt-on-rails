import React, { useContext, useState } from "react";
import { AppContext } from "../lib/context";
import { AppRoutes } from "../routes";

export const App = () => {
  const userContext = useContext(AppContext);
  const [ user, setUser ] = useState(userContext.user);

  return (
    <AppContext.Provider value={{ 
      user: user, 
      setUser: setUser 
    }}>
      <AppRoutes />
    </AppContext.Provider>
  );
};
