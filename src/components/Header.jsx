// import AddTask from "./AddTask"
import Button from "./Button"
import './Header.module.css'

const Header = ({tasks, settasks}) => {
  return (
    <div className="header">
        <h1>Task Tracker</h1>
        <Button  tasks={tasks}  settasks={settasks} />
    </div>
  )
}

export default Header