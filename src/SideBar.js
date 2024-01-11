import React,{useState} from "react";

const SideBar=()=>{

    const [openAndClose , setOpenAndClose] = useState(true);

    const handleButton = ()=>{
        setOpenAndClose(false);
    }

    return(
        <React.Fragment>
        <div className="sidebar">
            <div className="sidebar-one">
                <div className="inside-one">T</div>
                Trello WorkSpace
            </div>

            <div className="sidebar-two">
            {<i class="fa-regular fa-square"></i>}
            &nbsp; &nbsp;
                Boards
            </div>

            <div className="sidebar-two">
            {<i class="fa-regular fa-user"></i>}
            &nbsp; &nbsp;
                Members 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
            </div>

            <div className="sidebar-two">
            {<i class="fa-solid fa-gear"></i>}
            &nbsp; &nbsp;
                WorkSpace Settings
            </div>

            <div style={{paddingTop:"10px",paddingLeft:"5px"}}>
                <div style={{fontWeight:"bold"}}>WorkSpace views</div>
                <div className="sidebar-three">
                {<i class="fa-solid fa-table"></i>}
                &nbsp; &nbsp;
                Table</div>
                <div className="sidebar-three">
                {<i class="fa-regular fa-calendar-days"></i>}
                &nbsp; &nbsp;
                Calender</div>
            </div>
        
            <div style={{padding:"10px"}}>
            <div style={{fontWeight:"bold"}}>Your Boards</div>
            <div className="sidebar-four">
            {<i class="fa-solid fa-calendar"></i>}
            &nbsp; &nbsp;
                My Trello Board
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
            </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default SideBar;