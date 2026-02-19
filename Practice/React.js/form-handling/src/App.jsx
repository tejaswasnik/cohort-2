import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    setUsername("");
    setAllUsers([...allUsers, username])
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter name..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <button>Submit</button>
      </form>

            {allUsers.map((elem)=>{
        return <h1>{elem}</h1>
      })}
    </div>
  );
};

export default App;
