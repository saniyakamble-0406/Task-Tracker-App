import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value)
    setSubmitted(false)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setSubmitted(false)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app">
      <div className="form-card">
        <div className="heading">
          <h1>React Day 4</h1>
          <h2>Event Handling & Forms</h2>
          <p>Enter your details and submit the form.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message"
              rows="5"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div className="result">
            <h3>Form Submitted Successfully</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong> {message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App