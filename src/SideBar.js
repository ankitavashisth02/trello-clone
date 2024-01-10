import React from "react";

const SideBar=()=>{

    return(
        <React.Fragment>
        <div className="sidebar">
            <div className="sidebar-one">
                <div className="inside-one">T</div>
                Trello WorkSpace
            </div>

            <div className="sidebar-two">
                Boards
            </div>

            <div className="sidebar-two">
                Members &nbsp;&nbsp;+
            </div>

            <div className="sidebar-two">
                WorkSpace Settings
            </div>

            <div style={{padding:"10px",border : "1px solid #CD519D"}}>
            WorkSpace views
                <div className="sidebar-three">Table</div>
                <div className="sidebar-three">Calender</div>
            </div>
            
        </div>
        </React.Fragment>
    )
}

export default SideBar;