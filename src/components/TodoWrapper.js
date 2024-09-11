import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditTodoForm';
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
   
    const [todos, settodos] = useState([])

    //created a prop
    const addTodo= todo =>{
        settodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
        console.log(todos);
    }
    // copy of current todo i.e ...todos

    const toggleComplete = id =>{
        settodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed}: todo))
    }

    const deleteTodo = id => {
        settodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        settodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}:todo))
    }

    const editTask = (task, id) =>{
        settodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}:todo))
    }       
    

    return(
        <div className='TodoWrapper'>
             <TodoForm addTodo={addTodo}/>
             {todos.map((todo, index)=>(
                todo.isEditing ?(
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ):(
                    <Todo task={todo} key={index} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    />
                )
                
             ))}
             
        </div>
       
    )
}