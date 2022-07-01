import React, { useState } from 'react'
import Tasks from '../task/Tasks'
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
        <label htmlFor=""></label>
        <input type="text" value={taskItem.task} name="Task" id='task' onChange={handleTask} />
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text"  value={taskItem.date} name="Date" id='date' onChange={handleTask} />
        </div>
        <button type="submit">Save Task</button>
    </form>
    <div>
       
    </div>
    <Tasks taskListItems={array}/>
    </div>
   
  )
}

export default AddTask;