import WavesIcon from '@mui/icons-material/Waves';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileComp from './ProfileComp';
import { Link } from "react-router-dom";
import '../../css/nav-css/TopNav.css'

function TopNav() {
    return <nav className='navbar'>
        <div className='navbar-brand'>
            <WavesIcon fontSize='large'/>
            <h1>LIDO POOLS</h1>
        </div>
        <div className='navbar-links'>
            <ul className='topnav-list'>
                <li><NotificationsIcon className='notifications' fontSize='large'/></li>
                <li><ProfileComp /></li>
            </ul>
        </div>
    </nav>
}

export default TopNav