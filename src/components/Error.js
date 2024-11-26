import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-lg">
        <strong className="font-semibold">Error:</strong>
        <span className="ml-2">{error}</span>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
