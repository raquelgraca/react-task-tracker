import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Create Status Report',
      day: 'May 17th at 8:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doc Appoint',
      day: 'May 17th at 12:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Finish Template',
      day: 'May 17th at 02:00pm',
      reminder: false,
    }    
  ])
  
//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask} />
      ) : ( 'Congrats! You finished your tasks.' )}
    </div>
  );
}

export default App;
