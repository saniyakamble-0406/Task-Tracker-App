import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Start learning React')

  const increaseCount = () => {
    setCount(count + 1)
    setMessage('You are making progress!')
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const resetCount = () => {
    setCount(0)
    setMessage('Start learning React')
  }

  return (
    <div className="app">
      <div className="card">
        <h1>React Day 3</h1>
        <h2>State with useState</h2>

        <p className="message">{message}</p>

        <div className="counter">
          <span>{count}</span>
        </div>

        <div className="buttons">
          <button onClick={decreaseCount}>Decrease</button>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={resetCount}>Reset</button>
        </div>

        <div className="info">
          <p>Current Count: {count}</p>
          <p>State changes dynamically when the value is updated.</p>
        </div>
      </div>
    </div>
  )
}

export default App