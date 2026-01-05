
import{useState,useEffect}from'react';
import{ Link}from"react-router-dom";
import{getTodos}from"../api/todoSerive";

function TodoList(){
    const[todos,setTodo]=useState([]);

    useEffect(()=>{
        getTodos()
        .then((Response)=>setTodo(Response.data.slice(0,10)))
        .catch((error)=>console.error(error));
    },[])


    return(<div>
        <h2>TOdo List</h2>
        {todos.map((todo)=>(
            <div key={todo.id} >
              <Link  to={`/todo/${todo.id}`}>
              <strong>{todo.title}</strong>
              </Link>
              <p>status:{todo.completed ?"completed": "pending"}</p>
            </div>

        ))}



    </div>
    );
}
export default TodoList;