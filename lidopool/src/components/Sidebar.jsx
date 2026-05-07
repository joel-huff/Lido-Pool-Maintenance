import { Link } from "react-router-dom";
import '../css/SideNav.css'
import { SidebarData } from './SidebarData.jsx'

function Sidebar(){
    return(
        <div className='navbar-side'>
            <ul className='navbar-list'>
                {SidebarData.map((val, key)=>{
                    return(
                        <li key={key}><div className='navbar-listitem'>{val.icon} {val.title}</div></li>
                    )
                })}
                <div className="bottom-logout">
                    <li>Logout</li>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar;