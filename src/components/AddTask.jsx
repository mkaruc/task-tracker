import React, { useState } from 'react'
import Tasks from './Tasks'
const AddTask = () => {
    const[taskItem, setTaskItem]=useState({ task : "", date : "" })
    const [array,setArray] = useState([taskItem])
    function handleTask(e){
        setTaskItem({...taskItem, [e.target.id]:e.target.value })
    } 
    function submitTask(e){
        e.preventDefault();
        setTaskItem({ task : "", date : "" });
        console.log(taskItem); 
        setArray(array =>[...array,taskItem]);
        console.log(array);
        }
  return (
    <div>
    <form onSubmit={submitTask}>
        <div>
        <label htmlFor="task">Task</label>
        <input type="text" value={taskItem.task} name="Task" id='task' placeholder='Add Task' onChange={handleTask} />
        </div>
        <div>
        <label htmlFor="date">Date</label>
        <input type="datetime-local"  value={taskItem.date} name="Date" id='date' onChange={handleTask} />
        </div>
        <button type="submit">Save Task</button>
    </form>
    <div>
       
    </div>
    <Tasks taskListItems1={array}/>
    </div>
   
  )
}

export default AddTask;