import React, { useContext } from 'react';
import { AppContext } from "../lib/context";

export const Home = () => {
  // const userContext = useContext(AppContext);

  return (
    <div className="flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold mb-2">ChattyAI</h1>
      <p className="max-w-[80%] text-sm text-gray-400 mb-2">Experience the power of AI-driven chat with ChattyAI.</p>
      <hr className="border-t-1 border-gray-500 border-solid mb-4" />
      <div className="flex flex-col gap-4 text-gray-300 text-opacity-90 mb-3">
        <p>
          Introducing "ChattyAI" - the AI-powered chat application built with Ruby on Rails for the backend and React for the frontend.
        </p>
        <p>
          ChattyAI offers seamless conversations with its advanced natural language processing capabilities that analyze your messages and provide accurate responses. 
        </p>
        <p>
          The app features a sleek and intuitive user interface that makes it easy to use and navigate. Whether you need a chatbot for personal or business use, ChattyAI is the perfect solution.
        </p>
        <p>
          Experience the power of AI-driven chat with ChattyAI today.
        </p>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};
