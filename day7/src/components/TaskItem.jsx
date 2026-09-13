function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3 min-w-0">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 cursor-pointer accent-blue-600"
        />

        <span
          className={`break-words text-base ${
            task.completed
              ? 'text-gray-400 line-through'
              : 'text-gray-800'
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="shrink-0 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem