

const Workspaces = ()=>{
    return(
        <select className="workspace" defaultValue="Workspace">
            <option value="workspaces">Workspaces</option>
            <option value="current">Current Workspace</option>
            <option value="your">Your Workspace</option>
      </select>
    )
}

const More = ()=>{
    return(
        <select className="more" defaultValue="More">
            <option value="more">More</option>
            <option value="recent">Recent Boards</option>
            <option value="star">Star Boards</option>
            <option value="templates">Templates</option>
      </select>
    )
}

const Header = ()=>{
    return (
        <div className="navbar">
            <ul className="navbar-list">
            <li>{<i class="fa-solid fa-braille"></i>}</li>
                <li className="item1">Trello</li>
                <li><Workspaces/></li>
                <li><More/></li>
                <li>icon3</li>
                <li><input type="text" id="search" placeholder="Search"/></li>
                <li>{<i class="fa-regular fa-bell"></i>}</li>
                <li>{<i class="fa-solid fa-circle-info"></i>}</li>
                <li>{<i class="fa-solid fa-arrow-right-to-bracket"></i>}</li>
            </ul>
        </div>
    )
}

export default Header;