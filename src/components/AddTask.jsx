import React, { useState } from 'react'
import Tasks from './Tasks'
const AddTask = ({tasks , settasks}) => {
    const[task, setTask]=useState("")
    const[date, setDate]=useState("")
    function submitTask(e){
        e.preventDefault();
        const id=new Date().getTime();
        const newTask={ id: id,task:task, date: date, isDone:false}
        settasks([...tasks,newTask])
        console.log(tasks);
        setTask("");
        setDate("");
        };
  return (
    <div>
    <form onSubmit={submitTask}>
        <div>
        <label htmlFor="task">Task</label>
        <input type="text" value={task} name="Task" id='task' placeholder='Add Task' onChange={(e)=>setTask(e.target.value)} required />
        </div>
        <div>
        <label htmlFor="date">Date</label>
        <input type="datetime-local"  value={date} name="Date" id='date' onChange={(e)=>setDate(e.target.value)} required/>
        </div>
        <button type="submit">Save Task</button>
    </form>
    <div>
       
    </div>
    <Tasks tasks={tasks}  settasks={settasks}/>
    </div>
   
  )
}

export default AddTask;