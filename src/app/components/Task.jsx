<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
function Task(props){
  if(props.isDone == true){
    return(<div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span class="text-decoration-line-through">{props.title}</span> 
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>)
  }
  else{
    return(<div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span>{props.title}</span> 
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>)
  }
  
}
export default Task