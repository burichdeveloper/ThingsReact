import React from 'react'
import './CategoryDropDownMenu.css'

import TagSVG from './img/SVGComponents/TagSVG'
import LogbookSVG from './img/SVGComponents/LogbookSVG'

function CategoryDropDownMenu(props) {
    return (
        <div className="categoryDropDownMenu">
            <div className="screen-cover" onClick={props.hideMenu}></div>
            <div className="options">
                <ul>
                    <li><TagSVG /> Filter by Tag</li>

                    <li>Select</li>

                    <li><LogbookSVG /> Log Completed</li>

                    <li>Paste</li>

                    <li>Share</li>
                </ul>
            </div>
            
        </div>
        

    )
}
export default CategoryDropDownMenu