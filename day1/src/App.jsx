function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>React Day 1</h1>
        <h2>React Fundamentals</h2>
        <p>
          Welcome to my first React application built using Vite and JSX.
        </p>

        <div className="info">
          <div>
            <span>Technology</span>
            <strong>React.js</strong>
          </div>

          <div>
            <span>Build Tool</span>
            <strong>Vite</strong>
          </div>

          <div>
            <span>Concept</span>
            <strong>JSX</strong>
          </div>
        </div>

        <button>Get Started</button>
      </div>
    </div>
  )
}

export default App