import React from 'react'
import AddTask from '../addtask/AddTask'
 
 const Tasks = ({array}) => {   
  return (
     <div>
  <ul>{
            array.map((item)=>{
            return <li>{item}</li>
                })
          }
        </ul></div>)}

 
 export default Tasks