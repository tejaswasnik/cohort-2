import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log('useEffect')
  }, [])
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
