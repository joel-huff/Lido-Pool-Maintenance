import { Link } from "react-router-dom";
import '../css/SideNav.css'
import { SidebarData } from './SidebarData.jsx'

function Sidebar(){
    return(
        <nav className='navbar-side'>
            <ul className='navbar-list'>
                {SidebarData.map((val, key)=>{
                    return(
                        <li key={key}><div>{val.icon} {val.title}</div></li>
                    )
                })}
            </ul>
            
            <div className="navbar-logout">
                <h1>Logout</h1>
            </div>
        </nav>
    )
}

export default Sidebar;