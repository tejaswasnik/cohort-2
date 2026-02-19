import React from 'react'
import axios from "axios";
const App = () => {
  async function getData() {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App