import React, { FormEvent, useState } from "react";
import { Header } from "./Header";

const INPUT_NAMES = [ "email", "password", "confirm_password" ];

export const Register = () => {
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData: any = [];

    document.querySelectorAll("input").forEach((input) => {
      if (!INPUT_NAMES.includes(input.name)) return;
      formData[input.name] = input.value;
      input.value = "";
    });

    if (formData.username === "" || formData.password === "" || formData.confirm_password === "") {
      console.log("Please fill out all fields");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      console.log("Passwords do not match");
      return;
    }
  };

  return (
    <div className="flex-col items-center justify-center p-5">
      <Header />
      <Description />
      <div className="flex flex-col gap-4 text-gray-300 text-opacity-90 mb-3">
        <form onSubmit={formSubmit}>
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex">
              <label htmlFor="email" className="w-48 text-gray-400">Email:</label>
              <input type="email" name="email" className="text-gray-500" required />
            </div>
            <div className="flex">
              <label className="w-48 text-gray-400">Password:</label>
              <input type="password" name="password" className="text-gray-500" required />
            </div>
            <div className="flex">
              <label className="w-48 text-gray-400">Confirm Password:</label>
              <input type="password" name="confirm_password" className="text-gray-500" required />
            </div>
          </div>
          <div className="flex justify-end">
            <input type="submit" value="Register" className="bg-blue-500 text-white py-2 px-4 rounded" />
          </div>
        </form>
      </div>
    </div>
  );
};

const Description = () => 
  <div className="flex flex-col gap-4 text-xl text-gray-300 text-opacity-90 mb-5 bold">
    <h1 className="text-gray-300">Registration</h1>
  </div>
;
