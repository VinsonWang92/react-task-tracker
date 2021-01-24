import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState( [
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    }
  ])
  return (
    <div className="container">
      <Header title ='Task Tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

// Delete Task
const deleteTask = (id) => {
  console.log('delete', id)
}


export default App;
