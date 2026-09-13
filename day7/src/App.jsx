import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const newTask = task.trim()

    if (!newTask) {
      return
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask,
        completed: false,
      },
    ])

    setTask('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask()
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  const completedTasks = tasks.filter((item) => item.completed).length

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Task Tracker
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your daily tasks easily
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Add Task
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
            <span className="font-medium text-gray-700">
              Total Tasks: {tasks.length}
            </span>

            <span className="font-medium text-green-600">
              Completed: {completedTasks}
            </span>
          </div>

          <div className="mt-6">
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App