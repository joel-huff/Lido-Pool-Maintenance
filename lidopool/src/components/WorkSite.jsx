import poolimage from '../assets/Backyardpool.jpg'
import '../css/WorkSite.css'

function WorkSite(){
    return(
        <div className='worksite-container'>
            <img className='pool-photo' src={poolimage} alt="" />
            <div className='worksit-info'>
                <h1>Stand In Apartment</h1>
                <p>Address: 123 Fake Street</p>
                <p>Last Service Date: 01/02/03</p>
                <p>Account: Stand In LLC</p>
            </div>
 
        </div>
    )
}
export default WorkSite;