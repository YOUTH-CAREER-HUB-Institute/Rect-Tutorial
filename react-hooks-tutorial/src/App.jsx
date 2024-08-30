import './App.css'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((prev) => {
      return prev + 4
    })
  }
  // const increaseCounter = ()=>{
  //   setCount(count+4)
  // }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCounter}>Click</button>
    </>
  )
}

export default App
