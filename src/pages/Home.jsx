import Header from '../components/Header'
import Tasks from '../components/Tasks'
import { useEffect, useState } from "react";
// import data from "../helper/starterData"
import "./Home.css"
const Home = () => {
    const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

    const deleteTask = (deletedTaskId) => {
      settasks(tasks.filter((task) => task.id !== deletedTaskId));
    };

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
}, [tasks]);

const isDoneApp=(isDoneId)=>{
  settasks(tasks.map(task=>task.id===isDoneId?{...task,isDone: !task.isDone}:task));
}

  return (
    <div className='container'>
        <Header tasks={tasks} settasks={settasks} />
        <Tasks   tasks={tasks} settasks={settasks} isDoneApp={isDoneApp} deleteTask={deleteTask}  />
        </div>
  )
}

export default Home