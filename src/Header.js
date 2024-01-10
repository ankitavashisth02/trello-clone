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
                <li className="item1">Trello</li>
                <Workspaces/>
                <More/>
                <li>icon3</li>
                <input type="text" id="search" placeholder="Search"/>
                <li>Notification</li>
                <li>Information</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Header;