import Task from "./Task"

const Tasks = ({tasks, deleteTask, isDoneApp }) => {
  return (
    <div>
 {
   tasks.map(task => (
     <Task duty = {task} key={task.id} deleteTask = {deleteTask} isDoneApp = {isDoneApp}/>
   ))
 }
    </div>
  )
}

export default Tasks