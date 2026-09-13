import Header from './components/Header'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header
        title="React Learning Hub"
        subtitle="Day 2 - Components & Props"
      />

      <main className="content">
        <CourseCard
          name="React.js"
          level="Beginner"
          duration="4 Weeks"
          description="Learn the fundamentals of React and build reusable user interfaces."
        />

        <CourseCard
          name="JavaScript"
          level="Intermediate"
          duration="6 Weeks"
          description="Improve your JavaScript skills and understand modern web development."
        />

        <CourseCard
          name="Python"
          level="Beginner"
          duration="5 Weeks"
          description="Learn Python programming concepts and develop practical applications."
        />
      </main>

      <Footer message="Keep learning and keep building." />
    </div>
  )
}

export default App