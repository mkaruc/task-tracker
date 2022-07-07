import { FaTimes } from "react-icons/fa";
import "./Task.module.css";
const Task = ({duty, deleteTask, isDoneApp}) => {
  return (
    <div className={`task ${duty.isDone ? "done" : ""}`} id="contDiv" onDoubleClick={() => isDoneApp(duty.id)}>
      <h3>{duty.task} <FaTimes onClick={() => deleteTask(duty.id)} style={{color : "red", cursor : "pointer"}}/></h3>
      <p>{duty.date}</p>
    </div>
  )
}

export default Task