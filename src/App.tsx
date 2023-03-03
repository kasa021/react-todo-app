import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ITask } from './interfaces'
import './App.css'

const App: React.FC =() => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todo,setTodo]  = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'task') {
      setTask(e.target.value)
    } else {
      setDeadline(Number(e.target.value))
    }
  }



  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder='Add a task' value={task} onChange={handleChange}/>
          <input type="number" name="deadline" placeholder='Set a deadline(in days)' value={deadline} onChange={handleChange}/>
        </div>
      <button>Add</button>
      </div>
      <div className='todoList'></div>
    </div>
  )
}

export default App
