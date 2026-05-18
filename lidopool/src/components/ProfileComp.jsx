import Avatar from '@mui/material/Avatar';
import { ProfileCompData } from './component-data/ProfileCompData';
import '../css/ProfileComp.css'

function ProfileComp(){
    return(
        <div className='profile-info'>
            <div><Avatar>JD</Avatar></div>
            <div className='profile-text'>
                {ProfileCompData.map((val,key)=>{
                    return(
                            <div key={key}> 
                                <p>{val.name}</p>
                                <p className='position'>{val.title}</p>
                            </div>
                    )
                })}

            </div>
        </div>
        
    )
}
export default ProfileComp