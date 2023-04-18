import React, { useContext } from 'react';
import { AppContext } from "../lib/context";

export const Home = () => {
  const abc = "abc";
  const userContext = useContext(AppContext);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello!
        Hello {userContext.user.name}!
        {abc}
      </h1>
    </div>
  );
};
