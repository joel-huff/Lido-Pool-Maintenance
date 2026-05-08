import Avatar from '@mui/material/Avatar';
import '../css/ProfileComp.css'

function ProfileComp(){
    return(
        <div className='profile-info'>
            <div><Avatar>JD</Avatar></div>
            <div className='profile-text'>
                <p>Jane Doe</p>
                <p className='position'>Technician</p>
            </div>
        </div>
        
    )
}
export default ProfileComp