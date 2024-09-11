import React, {useState} from 'react';

export const TodoForm =({addTodo})=>{
    const [value, setValue]=useState("")

    const handleSubmit= e =>{
        
        e.preventDefault();

        addTodo(value); //addTodo is a Prop

        setValue("");
    }

    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <h1>Todo List</h1>
            <input type='text' className='todo-input' placeholder='What is the Task Today?' value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}