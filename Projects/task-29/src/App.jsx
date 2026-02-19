import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const localData = JSON.parse(localStorage.getItem("all-users")) || [];
  const [allUsers, setallUsers] = useState(localData);

  function submitHandler(e) {
    e.preventDefault();
    const newAllUsers = [...allUsers];
    newAllUsers.push({ name, email, image, role });
    setallUsers(newAllUsers);
    localStorage.setItem("all-users", JSON.stringify(newAllUsers));
    setName("");
    setEmail("");
    setImage("");
    setRole("");
  }

  function deleteHandler(idx) {
    const copyUsers = [...allUsers];
    copyUsers.splice(idx, 1);
    setallUsers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));
  }

  return (
    <div className="main">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <div className="cards-wrapper">
        {allUsers.map((elem, idx) => (
          <div className="card" key={idx}>
            <img src={elem.image} alt="user" />
            <p>{elem.name}</p>
            <p>{elem.email}</p>
            <p>{elem.role}</p>
            <button onClick={() => deleteHandler(idx)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
