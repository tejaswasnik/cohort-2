import React, { useState } from "react";

const App = () => {
  const [marks, setmarks] = useState([32, 36, 31, 90, 100]);
  function graceStudent() {
    let newMarks = marks.map(function (elem) {
      return elem < 33 ? elem + 5 : elem;
    });
    setmarks(newMarks);
  }
  return (
    <div>
      {marks.map(function (elem, idx) {
        return (
          <h1 className="text-xl font-bold" key={idx}>
            student {idx + 1} : {elem} ({elem < 33 ? "Fail" : "Pass"})
          </h1>
        );
      })}
      <button
        onClick={graceStudent}
        className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 
       text-white font-semibold shadow-md 
       hover:shadow-lg hover:scale-105 
       active:scale-95 
       transition-all duration-200"
      >
        Give them grace
      </button>
    </div>
  );
};

export default App;
