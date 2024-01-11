import './navbar.css';

const Workspaces = ()=>{
    return(
        <select className="workspace" defaultValue="Workspace">
            <option value="workspaces">Workspaces</option>
            <option value="current">Current Workspace</option>
            <option value="your">Your Workspace</option>
      </select>
    )
}

const Templates = ()=>{
    return(
        <select className="more" defaultValue="templates">
            <option value="templates">Templates</option>
            <option value="recent">Recent Boards</option>
        </select>
    )
}

const Recent = ()=>{
    return(
        <select className="more" defaultValue="templates">
            <option value="templates">Recent</option>
            <option value="recent">Recent Boards</option>
        </select>
    )
}

const Starred = ()=>{
    return(
        <select className="more" defaultValue="templates">
            <option value="templates">Starred</option>
            <option value="recent">Recent Boards</option>
        </select>
    )
}

const Header = ()=>{
    return (
        <div className="navbar">
            <div className='one-half'>
                <div>{<i class="fa-solid fa-braille"></i>}</div>
                <div className='title'>Trello</div>
                <div><Workspaces/></div>
                <div><Templates/></div>
                <div><Recent/></div>
                <div><Starred/></div>
                <div><button className='btn'>Create</button></div>
            </div>
<div></div>
            <div className='second-half'>
                <div><input type="text" className="search" placeholder="Search"/></div>
                <div>{<i class="fa-regular fa-bell"></i>}</div>
                <div>{<i class="fa-solid fa-circle-info"></i>}</div>
                <div>{<i class="fa-solid fa-arrow-right-to-bracket"></i>}</div>
            </div>
        </div>
    )
}

export default Header;