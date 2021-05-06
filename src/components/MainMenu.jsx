import React from 'react'
import './MainMenu.css'

import InboxSVG from './img/SVGComponents/InboxSVG'
import StarSVG from './img/SVGComponents/StarSVG'
import CalendarSVG from './img/SVGComponents/CalendarSVG'
import LayersSVG from './img/SVGComponents/LayersSVG'
import LogbookSVG from './img/SVGComponents/LogbookSVG'
import ArchiveSVG from './img/SVGComponents/ArchiveSVG'


function MainMenu(props) {
    return(
        <div className="MainMenu">
            <form className="search">
                <input type="text" placeholder="Quick Find"/>
            </form>
            
            <div className="content">
                <div className="featuredCategories">
                <div id="Inbox" className="categoryItem inbox" onClick={props.ShowCategory}>
                    <InboxSVG />
                    <div 
                     className="categoryLabels"
                    >
                        <p>Inbox</p>
                        <p>3</p>
                    </div> 
                </div>

                <div id="Today" className="categoryItem today" onClick={props.ShowCategory}>
                    <StarSVG />
                    <div className="categoryLabels">
                        <p>Today</p>
                        <p>4</p>
                    </div> 
                </div>

                <div id="Upcoming" className="categoryItem upcoming" onClick={props.ShowCategory}>
                    <CalendarSVG />
                    <div className="categoryLabels">
                        <p>Upcoming</p>
                        <p></p>
                    </div> 
                </div>

                <div id="Anytime" className="categoryItem anytime"
                onClick={props.ShowCategory}>
                    <LayersSVG />
                    <div className="categoryLabels">
                        <p>Anytime</p>
                        <p></p>
                    </div> 
                </div>

                <div id="Someday" className="categoryItem someday"
                onClick={props.ShowCategory}>
                    <ArchiveSVG />
                    <div className="categoryLabels">
                        <p>Someday</p>
                        <p></p>
                    </div> 
                </div>

                <div id="Logbook" className="categoryItem logbook"
                onClick={props.ShowCategory}>
                    <LogbookSVG />
                    <div className="categoryLabels">
                        <p>Logbook</p>
                        <p></p>
                    </div> 
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default MainMenu