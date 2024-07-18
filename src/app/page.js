import Header from "./components/Header";
import TaskInput from "./components/TaskIn";
import Task from "./components/Task";
import Footer from "./components/Footer";


export default function Home() {
  const taskslist = [
    {id : 1, title : "Read a book" ,isDone : true},
    {id : 2, title : "Take a shower" ,isDone : false},
    {id : 3, title : "Sleep" ,isDone : false}
    

  ]
  return (
    <div className="container mx-auto">
      <Header/>
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput/>
        <Task {...taskslist[0]} />
        <Task {...taskslist[1]} />
        <Task {...taskslist[2]} />
      </div>

      <Footer year = "2024" fullName = "Kanchai Khumdee" studentId = "660610739" />
    </div>
  );
}
