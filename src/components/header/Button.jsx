import { useState } from "react"
import AddTask from "../addtask/AddTask"

const Button = () => {
    const[visMenu, setvisMenu]=useState(true)
  return (
    <div>
        <button onClick={()=> setvisMenu(!visMenu)}>{visMenu ? 'Show Add Task Bar' : 'Close Add Task Bar'}</button>
        <div>
            {!visMenu ? <AddTask /> : null} 
        </div>
    </div>
  )
}

export default Button