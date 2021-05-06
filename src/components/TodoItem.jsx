import React from 'react'
import './TodoItem.css'

import Actions from './Actions'

function TodoItem(props) {
    var component
    if (props.todo.focused) {
        component = 
        <div id={props.todo.id} className='focusedTodoItem' onClick={props.handleClickToDo}>
            <div className='todoHeader'>
                <input 
                    type='checkbox'
                    name='completed'
                    data-id={props.todo.id}
                    checked={props.todo.completed} 
                    onChange={props.handleChange}
                    onClick={(e)=>{e.stopPropagation()}}
                    />
                <input 
                    type="text"
                    name="activity" 
                    data-id={props.todo.id}
                    value={props.todo.activity} 
                    onChange={props.handleChange}
                    onClick={(e)=>{e.stopPropagation()}}
                    placeholder="New To-Do"
                />
            </div>
            <div className="notes">
                <textarea
                    name="notes" 
                    data-id={props.todo.id}
                    value={props.todo.notes}
                    onChange={props.handleChange}
                    onClick={(e)=>{e.stopPropagation()}}
                    placeholder="Notes" 
                />
            </div>

            <Actions state={props.state} />
        <div>
                
            </div>
        </div>

    } else {
        component = 
        <div id={props.todo.id} className='todoItem' onClick={props.handleClickToDo}>
            <input 
                type='checkbox'
                name='completed'
                data-id={props.todo.id}
                checked={props.todo.completed} 
                onChange={props.handleChange}
                onClick={(e)=>{e.stopPropagation()}}
                />

            <p  className={props.todo.completed ? "completed-item" : ""}>
                {props.todo.activity.length > 0 ? props.todo.activity : "New To-Do"}
            </p>
        </div>
    }
    return (
        component
    )
}

export default TodoItem 