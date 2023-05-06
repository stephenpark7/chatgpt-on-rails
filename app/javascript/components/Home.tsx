import React, { useContext } from 'react';
import { AppContext } from "../lib/context";

export const Home = () => {
  // const userContext = useContext(AppContext);

  return (
    <div className="flex items-center justify-center pt-5">
      <h1 className="text-4xl font-bold underline">
        ChatGPT on Rails
      </h1>
    </div>
  );
};
