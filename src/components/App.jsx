import React from 'react'
import './App.css'

import TodoList from './TodoList'


import Inbox from './Inbox'
import Today from './Today'
import Someday from './Someday'
import Logbook from './Logbook'
import Anytime from './Anytime'
import Upcoming from './Upcoming'

import MainMenu from './MainMenu'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodoList,
            tags:['home', 'office', 'pet', 'etc', 'home', 'office', 'pet', 'etc', 'home', 'office', 'pet', 'etc'],
            showMenu: false,
            currentView: "MainMenu"
        }


        this.handleChange = this.handleChange.bind(this)
        this.handleClickToDo = this.handleClickToDo.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.showMenu = this.showMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        this.ShowCategory = this.ShowCategory.bind(this)
        this.ToMainMenu = this.ToMainMenu.bind(this)
    }


    handleChange(e){
        const {name, value, type, checked, dataset} = e.target
        

        if (type === 'checkbox'){
            this.setState(prevState => {
                const updatedState = prevState.todos.map((item)=>{
                    if (`${item.id}` === dataset.id){
                        item.completed = checked
                        if (checked) {
                            item.completedOn = new Date();
                        } else {
                            item.completedOn = null;
                        }
                        
                    }
                    return item
                })
                return {
                    todos:updatedState
                }
            })
        } else {
            this.setState(prevState => {
                const updatedState = prevState.todos.map((item)=>{
                    if (`${item.id}` === dataset.id){
                        item[name] = value
                    }
                    return item
                })
                
                return {
                    todos:updatedState
                }
            })
        }

    }

    handleClickToDo(e) {
        
        this.setState(prevState => {
            const updatedState = prevState.todos.map((item)=>{
                if (`${item.id}` === e.target.id){
                    item.focused = !item.focused
                } else{
                    item.focused = false;
                }
                return item
            })
            
            return {
                todos:updatedState
                
            }
        })
    }

    addTodoClicked() {
        this.setState(prevState => {
            var updatedState = prevState.todos.map((item)=>{
                item.focused = false;
                return item
            })
            const newToDo = {
                id:updatedState.length + 1,
                activity: "",
                completed: false,
                completedOn: null,
                focused: true,
                notes:"",
                project: null,
                dueOn: null,
                doOn: null,
                someday: false
            }

            updatedState = [newToDo, ...updatedState]
            
            return {
                todos:updatedState
                
            }
        })
    }

    showMenu() {
        this.setState( 
            {showMenu: true}
        )
    }

    hideMenu() {
        this.setState( 
            {showMenu: false}
        )
    }    

    ShowCategory(e){
        this.setState(
            {currentView: e.currentTarget.id}
        )
    }

    ToMainMenu() {
        this.setState(
            {currentView: "MainMenu"}
        )
    }

    render() {
        var CurrentView
        if (this.state.currentView === "MainMenu"){
            CurrentView = <MainMenu ShowCategory={this.ShowCategory}/>
        }else if (this.state.currentView === "Inbox"){
            
            CurrentView =
            <Inbox 
                state={this.state} 
                handleChange={this.handleChange}
                handleClickToDo={this.handleClickToDo} 
                addTodoClicked={this.addTodoClicked} showMenu={this.showMenu} 
                hideMenu={this.hideMenu} 
                ToMainMenu={this.ToMainMenu} 
            /> 
        } else if (this.state.currentView === "Today") {
            CurrentView = 
            <Today 
            state={this.state} 
            handleChange={this.handleChange}
            handleClickToDo={this.handleClickToDo} 
            addTodoClicked={this.addTodoClicked} showMenu={this.showMenu} 
            hideMenu={this.hideMenu} 
            ToMainMenu={this.ToMainMenu} 
        /> 
        }

        else if (this.state.currentView === "Upcoming") {
            CurrentView = 
            <Upcoming 
            state={this.state} 
            handleChange={this.handleChange}
            handleClickToDo={this.handleClickToDo} 
            addTodoClicked={this.addTodoClicked} showMenu={this.showMenu} 
            hideMenu={this.hideMenu} 
            ToMainMenu={this.ToMainMenu} 
        /> 
        }

        else if (this.state.currentView === "Anytime") {
            CurrentView = 
            <Anytime 
            state={this.state} 
            handleChange={this.handleChange}
            handleClickToDo={this.handleClickToDo} 
            addTodoClicked={this.addTodoClicked} showMenu={this.showMenu} 
            hideMenu={this.hideMenu} 
            ToMainMenu={this.ToMainMenu} 
        /> 
        }

        else if (this.state.currentView === "Someday") {
            CurrentView = 
            <Someday 
            state={this.state} 
            handleChange={this.handleChange}
            handleClickToDo={this.handleClickToDo} 
            addTodoClicked={this.addTodoClicked} showMenu={this.showMenu} 
            hideMenu={this.hideMenu} 
            ToMainMenu={this.ToMainMenu} 
        /> 
        }

        else if (this.state.currentView === "Logbook") {
            CurrentView = 
            <Logbook 
            state={this.state} 
            handleChange={this.handleChange}
            handleClickToDo={this.handleClickToDo} 
            addTodoClicked={this.addTodoClicked} showMenu={this.showMenu} 
            hideMenu={this.hideMenu} 
            ToMainMenu={this.ToMainMenu} 
        /> 
        }

        return (
            <div className='appContainer'>
               {CurrentView}
            </div>
        ) 
    }
}

export default App