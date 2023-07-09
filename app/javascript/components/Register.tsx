import React, { useContext } from "react";
import { AppContext } from "../lib/context";
import { Header } from "./Header";

export const Register = () => {
  // const userContext = useContext(AppContext);



  return (
    <div className="flex-col items-center justify-center p-5">
      <Header />
      <Description />
      <Button />
    </div>
  );
};

const Description = () => 
  <div className="flex flex-col gap-4 text-gray-300 text-opacity-90 mb-3">
    <h1>Registration</h1>
  </div>
;

const Button = () => 
  <div className="flex justify-end">
    <a href="/register">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Get Started
      </button>
    </a>
  </div>
;
