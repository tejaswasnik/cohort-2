import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [allUsers, setallUsers] = useState([]);
  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setallUsers(response.data);
    console.log(allUsers[0]);
  }
  return (
    <div className="container">
      <button onClick={getData}>Get Data</button>
      <div className="all-cards">
        {allUsers.map((elem, idx) => {
          return (
            <div key={idx} className="card">
              <h1 className="name">{elem.name}</h1>
              <h2 className="email">{elem.email}</h2>
              <p className="phone">{elem.phone}</p>
              <p className="website">{elem.website}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
