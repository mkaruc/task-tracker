import Header from '../components/Header'
import Tasks from '../components/Tasks'
import { useState } from "react";

const Home = () => {
    const [tasks, settasks] = useState();
  return (
    <div>
        <Header tasks={tasks} />
        <Tasks />
    </div>
  )
}

export default Home