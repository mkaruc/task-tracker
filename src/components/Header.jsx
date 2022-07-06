// import AddTask from "./AddTask"
import Button from "./Button"
import './Header.module.css'

const Header = ({tasks}) => {
  return (
    <div>
        <h1>Task Tracker</h1>
        {/* <AddTask /> */}
        <Button  tasks={tasks} />
    </div>
  )
}

export default Header