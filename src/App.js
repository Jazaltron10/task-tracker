import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () =>{
      // state is immutable therefore its not something that you can directly change hence why we use the useState hook setTasks 
    // SO the way it works is that anytime you are making changes to the state you are basically recreating it and send it down.
    const[tasasks, setTasks] = useState([  
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
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasasks}/>
    </div>
  );
}

export default App;





