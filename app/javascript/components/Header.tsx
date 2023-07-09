import React from "react";

export const Header = () => {
  // const userContext = useContext(AppContext);

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">ChattyAI</h1>
      <p className="max-w-[80%] text-sm text-gray-400 mb-2">Experience the power of AI-driven chat with ChattyAI.</p>
      <hr className="border-t-1 border-gray-500 border-solid mb-4" />
    </>
  );
};
