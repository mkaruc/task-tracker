import React, { useState } from 'react'
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
    <form onSubmit={submitTask} className="add-form">
        <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" value={task} name="Task" id='task' placeholder='Add Task' onChange={(e)=>setTask(e.target.value)} required />
        </div>
        <div className="form-control">
        <label htmlFor="date">Date</label>
        <input type="datetime-local"  value={date} name="Date" id='date' onChange={(e)=>setDate(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-block">Save Task</button>
    </form>
    </div>
   
  )
}

export default AddTask;