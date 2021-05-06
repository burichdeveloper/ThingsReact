import React from "react";
import './inbox.css'

import TodoItem from './TodoItem'
import Controls from './Controls'

import InboxSVG from './img/SVGComponents/InboxSVG'
import PlusSVG from './img/SVGComponents/PlusSVG'


function Inbox(props) {

    const components = props.state.todos.map((todo)=> {
        if (todo.project === null && !todo.completed){
          return <TodoItem key={todo.id} todo={todo} handleChange={props.handleChange} handleClickToDo={props.handleClickToDo}
            addTodoClicked = {props.addTodoClicked} state={props.state}
        />
        }
        
    })

    return(
        <div className="Inbox">
            <Controls 
              ToMainMenu={props.ToMainMenu}
              showMenu={props.showMenu}
              hideMenu={props.hideMenu}
              state={props.state}
            />

            <div className="content">
              <div className="categoryTitle">
                <InboxSVG />
                <h1>Inbox</h1>
              </div>
              {components}
            </div>

            <div className="addTodo" onClick={props.addTodoClicked}>
              <PlusSVG />
            </div>
        </div>
    )

  
}
export default Inbox;
