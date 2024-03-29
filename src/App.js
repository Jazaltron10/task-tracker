import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import About from "./components/About"

const App = () =>{
    // state is immutable therefore its not something that you can directly change hence why we use the useState hook setTasks 
    // SO the way it works is that anytime you are making changes to the state you are basically recreating it and send it down.
    // We use the hook useEffect make something happen right when the page loads its similar to DOMContentLoaded.
    const[showAddTask, setShowAddTask] = useState(false)
    const[tasks, setTasks] = useState([])

    useEffect(()=>{
      const getTasks = async () => {
          const tasksFromServer = await fetchTasks()
          setTasks(tasksFromServer)
      }

      getTasks()
    }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }
  // Fetch Task {Singular}
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  // Add Task 
  const addTask = async(task) => {
    const res = await fetch ('http://localhost:5000/tasks',{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)// turns it into a string 
    })
    
    const data = await res.json()
    setTasks([...tasks, data])
  // const id = Math.floor(Math.random()*10000) + 1

  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
  }

  // Delete Task 
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  // Toggle Reminder 
  const toggleReminder = async(id) =>{
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}

    const res = await fetch (`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()
    setTasks(
      tasks.map((task) => 
        // task.id === id ? {...task, reminder: !task.reminder } : task
        task.id === id ? {...task, reminder: data.reminder } : task
      )
      )
  }
  
  // To use the router we have to wrap everything in the return statement in the router tag.
  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} 
      showAdd = {showAddTask}/>
      

    <Route path="/" exact render={(props)=>(
      <>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete = {deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show "}
      </>
    )}/>

      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;





