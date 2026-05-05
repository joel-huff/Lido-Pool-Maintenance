import waves from './../assets/waves.svg'
import notifications from './../assets/notifications.svg'
import { Link } from "react-router-dom";
import '../css/TopNav.css'

function TopNav() {
    return <nav className='navbar'>
        <div className='navbar-brand'>
            <img src={waves} alt="" />
            <h1>Lido Pools</h1>
        </div>
        <div className='navbar-links'>
            <ul className='topnav-list'>
                <li><img src={notifications} alt="" /></li>
                <li>User Profile</li>
            </ul>
        </div>
    </nav>
}

export default TopNav