import { useState } from 'react'

function App() {
  const [showCourses, setShowCourses] = useState(true)

  const courses = [
    {
      id: 1,
      name: 'React.js',
      level: 'Beginner',
      duration: '4 Weeks'
    },
    {
      id: 2,
      name: 'JavaScript',
      level: 'Intermediate',
      duration: '6 Weeks'
    },
    {
      id: 3,
      name: 'Python',
      level: 'Beginner',
      duration: '5 Weeks'
    },
    {
      id: 4,
      name: 'Java',
      level: 'Intermediate',
      duration: '6 Weeks'
    }
  ]

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>React Day 5</h1>
          <h2>Lists & Conditional Rendering</h2>
          <p>Learn how React renders dynamic lists and conditional content.</p>
        </header>

        <button
          className="toggle-button"
          onClick={() => setShowCourses(!showCourses)}
        >
          {showCourses ? 'Hide Courses' : 'Show Courses'}
        </button>

        {showCourses ? (
          <div className="course-list">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <h3>{course.name}</h3>
                <p><strong>Level:</strong> {course.level}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Course list is currently hidden.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App