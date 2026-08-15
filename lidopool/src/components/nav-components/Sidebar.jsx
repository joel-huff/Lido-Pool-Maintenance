import { Link } from "react-router-dom";
import '../../css/nav-css/SideNav.css'
import { SidebarData } from './../component-data/SidebarData.jsx'
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";

function Sidebar({selectedIndex, setSelectedIndex}){
    

    const sideItems = SidebarData.map((val, index) => {
    return (
        <li key={index}>
            <div
                className={`navbar-listitem ${
                    selectedIndex === index ? "active" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
            >
                {val.icon}
                {val.title}
            </div>
        </li>
    );
});
    return(
        <nav className="navbar-side">
            <ul className="navbar-list">
                { sideItems }
            </ul>
                <div className="nav-break">
                    <div className="nav-divider"></div>
                    <div className="navbar-list">
                        <p className='navbar-listitem'>
                            <LogoutIcon fontSize="large"/>Logout
                        </p>
                    </div>
                </div>
        </nav>
    )
}

export default Sidebar;