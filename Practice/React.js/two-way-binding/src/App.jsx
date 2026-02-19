import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">{num}</h1>

        <div className="mt-4 flex gap-2 justify-center">
          <button
            onClick={() => setNum((n) => n + 1)}
            className="px-3 py-1 bg-blue-600 text-white rounded"
            aria-label="increase"
          >
            +
          </button>
          <button
            onClick={() => setNum((n) => n - 1)}
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded"
            aria-label="decrease"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
