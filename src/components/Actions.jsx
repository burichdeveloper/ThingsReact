import React from 'react'
import './Actions.css'

import TagMenu from './Menus/TagMenu'

import CalendarSVG from './img/SVGComponents/CalendarSVG'
import TagSVG from './img/SVGComponents/TagSVG'
import ListSVG from './img/SVGComponents/ListSVG'
import FlagSVG from './img/SVGComponents/FlagSVG'

function Actions(props) {
    return (
            <div className="actions">
                <CalendarSVG />
                <TagSVG />
                <ListSVG />
                <FlagSVG />

                {/* <TagMenu state={props.state}/> */}
            </div>

 )
}


export default Actions