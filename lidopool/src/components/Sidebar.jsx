import { Link } from "react-router-dom";
import '../css/SideNav.css'
import { SidebarData } from './component-data/SidebarData.jsx'
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar(){
    return(
        <nav className="navbar-side">
            <ul className="navbar-list">
                {SidebarData.map((val, key)=>{
                    return(
                        <li key={key}><div className='navbar-listitem'>{val.icon} {val.title}</div></li>
                    )
                   })}
            </ul>
                <div className="nav-break">
                    <div className="nav-divider"></div>
                    <div className="bottom-logout">
                        <p><div className='navbar-listitem'><LogoutIcon fontSize="large"/>Logout</div></p>
                    </div>
                </div>
        </nav>
    )
}

export default Sidebar;