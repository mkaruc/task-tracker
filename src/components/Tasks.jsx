import React from 'react'
// import AddTask from './AddTask'
 
 const Tasks = ({tasks}) => {
  return(
    <div className="taskListArea">
      {
        tasks.map((item)=>{
          const {id,task,date,isDone} =item
          return(
            <div className="taskList" key={id}>
              <ul>
                <li>{task}</li>
                <li>{date}</li>
                <li>{isDone}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
        }

 
 export default Tasks