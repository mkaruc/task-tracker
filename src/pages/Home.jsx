import Header from '../components/Header'
import Tasks from '../components/Tasks'
import { useEffect, useState } from "react";
// import data from "../helper/starterData"

const Home = () => {
    const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
}, [tasks]);

  return (
    <div>
        <Header tasks={tasks} settasks={settasks} />
        <Tasks   tasks={tasks} settasks={settasks} />
        </div>
  )
}

export default Home