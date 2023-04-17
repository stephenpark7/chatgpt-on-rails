import React, { useContext } from 'react';
import { AppContext } from "../lib/context";

export const Home = () => {
  const userContext = useContext(AppContext);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello!
        {/* Hello {userContext.user.name}! */}
      </h1>
    </div>
  );
};
