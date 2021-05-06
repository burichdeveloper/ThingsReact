import React from 'react'
import  './TagMenu.css'

import TagSVG from '../img/SVGComponents/TagSVG'

function TagMenu(props) {
    const tagsComponents = props.state.tags.map((tag)=>
    {
        return <li><TagSVG />{tag}</li>
    })
    
    return (
        <div className="TagMenu">
            <div className="screen-cover"></div>
            <div className="menu-content">
                <h2>Tags</h2>
                <p className="doneBtn">Done</p>
                <form>
                    <input 
                    type="text" 
                    placeholder="search"
                    />
                </form>
                <ul className="tagsList">
                    {tagsComponents}
                </ul>
                <div className='buttons'>
                    <button>Manage Tags</button>
                    <button>New Tag</button>
                </div>
            </div>
        </div>
    )
}
export default TagMenu