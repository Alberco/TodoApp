import { useEffect, useState } from "react"
import { Formulario } from "./Formulario"
import { Todo } from "./Todo"


export const TodoList = () => {

    const [todos,setTodos] = useState([])

    useEffect(()=>{
        if(localStorage.getItem("todos")){
            setTodos(JSON.parse(localStorage.getItem("todos")))
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));

    },[todos]);



    const agregarTodo = (todo) => {
        console.log(todo)
        setTodos((old) => [...old,todo])
    }   

    //con el filter devuelve un array nuevo pero solo con los datos que cumpla una condicion
    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }


    const editarTodo = (id) => {
        const  editarTodos = todos.map(item => (
            item.id === id ? {...item,estado:!item.estado} :item
        )) 
        setTodos(editarTodos)

    }
    return (
        <>
            <Formulario agregarTodo={agregarTodo} />
        
                <ul className="list-group list-group-numbered">
                {todos.map((item) => (  
                    <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
                ))}
                </ul>
        </>
    )
}
