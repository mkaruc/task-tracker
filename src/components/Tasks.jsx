import React from 'react'
import AddTask from './AddTask'
 
 const Tasks = ({taskListItems}) => {
//   const {task,date} =taskListItems   
  return (
     <div>
  <ul>{
            taskListItems.map((item)=>{
            return <li>{item}</li>
                })
          }
        </ul>
        </div>
        )
        }

 
 export default Tasks