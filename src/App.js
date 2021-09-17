import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () =>{
      // state is immutable therefore its not something that you can directly change hence why we use the useState hook setTasks 
    // SO the way it works is that anytime you are making changes to the state you are basically recreating it and send it down.
    const[tasks, setTasks] = useState([  
      {
          id:1,
          text:"Doctors Appointment",
          day:"Feb 5th at 2:30pm",
          reminder: true,
      },
      {
          id: 2,
          text:"Meeting at School",
          day:"Feb 6th at 1:30pm",
          reminder: true,
      },
      {
          id: 3,
          text: "Grocery shopping",
          day: "Feb 7th at 3:30pm",
          reminder: false,
      }
  ])  
  
  // Delete Task 
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  // Toggle Reminder 
  const toggleReminder = (id) =>{
    // console.log(id);
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder } : task
      )
      )
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete = {deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show "}
    </div>
  );
}

export default App;





