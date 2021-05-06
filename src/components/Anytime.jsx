import React from "react";
import './inbox.css'

import TodoItem from './TodoItem'
import Controls from './Controls'

import StarSVG from './img/SVGComponents/StarSVG'
import PlusSVG from './img/SVGComponents/PlusSVG'


function Anytime(props) {

    const components = props.state.todos.map((todo)=> {
        if (todo.doOn === null && todo.dueOn === null && !todo.someday && !todo.completed){
          return <TodoItem key={todo.id} todo={todo} handleChange={props.handleChange} handleClickToDo={props.handleClickToDo}
            addTodoClicked = {props.addTodoClicked} state={props.state}
        />
        }
        
    })

    return(
        <div className="Anytime">
            <Controls 
              ToMainMenu={props.ToMainMenu}
              showMenu={props.showMenu}
              hideMenu={props.hideMenu}
              state={props.state}
            />

            <div className="content">
              <div className="categoryTitle">
                <StarSVG />
                <h1>Anytime</h1>
              </div>
              {components}
            </div>

            <div className="addTodo" onClick={props.addTodoClicked}>
              <PlusSVG />
            </div>
        </div>
    )

  
}
export default Anytime;
