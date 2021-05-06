import React from 'react'

import CategoryDropDownMenu from './CategoryDropDownMenu'
import ChevronLeftSVG from './img/SVGComponents/ChevronLeftSVG'
import ChevronCircleSVG from './img/SVGComponents/ChevronCircleSVG'

function Controls(props) {
    return (
        <div>
            <div className="controls">
            <div onClick={props.ToMainMenu}>
              <ChevronLeftSVG />
            </div>
            
            <div onClick={props.showMenu}>
              <ChevronCircleSVG
                className="dropdown"
              />
            </div>
        </div>
        {/* Dropdown Menu */}
        {props.state.showMenu ? (
          <CategoryDropDownMenu hideMenu={props.hideMenu} />
        ) : null}
        </div>
        
    )
}
export default Controls