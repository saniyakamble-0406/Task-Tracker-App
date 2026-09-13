function CourseCard({ name, level, duration, description }) {
  return (
    <div className="course-card">
      <h2>{name}</h2>
      <div className="course-details">
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Duration:</strong> {duration}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default CourseCard