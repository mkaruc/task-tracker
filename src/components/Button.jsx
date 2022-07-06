import { useState } from "react"
import AddTask from "./AddTask"
import btnstyle from './Button.module.css';

const Button = () => {
    const[visMenu, setvisMenu]=useState(true)
    const[btnStyle,setbtnStyle]= useState({name: 'Show Add Task Bar', bgcolor:'purple'})
    const handleShow=()=>{
      if (visMenu) {
            setbtnStyle({
              name: 'Close Add Task Bar', bgcolor:'red'
            });
          }else{
            setbtnStyle({
              name: 'Show Add Task Bar', bgcolor:'purple'
            });
           }
        setvisMenu(!visMenu);
        }
  return (
    <div>
        <button onClick={handleShow} className={btnstyle['barButton']} style={{background:btnStyle.bgcolor}}>{btnStyle.name}</button>
        <div>
            {!visMenu && <AddTask />} 
        </div>
    </div>
  )
}

export default Button