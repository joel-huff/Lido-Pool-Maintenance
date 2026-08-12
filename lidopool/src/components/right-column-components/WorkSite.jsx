import { useState } from 'react'
import { MapPin } from 'lucide-react';
import poolimage from '../../assets/Backyardpool.jpg'
import '../../css/WorkSite.css'
import { WorksiteOptions } from '../component-data/WorksiteOptions'

function WorkSite(){
    const [selectedWorksite, setSelectedWorksite] = useState(WorksiteOptions[0].worksite);
    const [worksiteName, setWorksiteName] = useState(selectedWorksite)
    const [worksiteAddress, setWorksiteAddress] = useState(WorksiteOptions[0].address)
    const [worksiteLink, setWorksiteLink] = useState(WorksiteOptions[0].google_links)
    const [worksiteDate, setWorksiteDate] = useState(WorksiteOptions[0].service_date)
    const [worksiteAccount, setWorksiteAccount] = useState(WorksiteOptions[0].account)


    const handleWorksiteChange = (e) => {
        const value = e.target.value;
        setSelectedWorksite(value);
        const worksiteInfo = WorksiteOptions.find((item) => item.worksite === value);
        if (worksiteInfo) {
            setWorksiteName(worksiteInfo.worksite);
            setWorksiteAddress(worksiteInfo.address);
            setWorksiteLink(worksiteInfo.google_links)
            setWorksiteDate(worksiteInfo.service_date)
            setWorksiteDate(worksiteInfo.account)
        }
        else{
            setWorksiteName('Hello')
        }
    };

    return(
        <div className='worksite-container'>
            <h1><MapPin/>Select Pool</h1>
            <select className="worksite-select" name="" id="" filter="true" onChange={handleWorksiteChange} value={selectedWorksite}>
            {WorksiteOptions.map((val, key) =>{
                return(
                    <option key={val.id} value={val.worksite}>{val.worksite}</option>
                        )
                })}

            </select>
            <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d360.90407309296666!2d-116.4272136!3d43.6433291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae53697624e851%3A0x3a1ba831af2a0594!2s2650%20W%20Belltower%20Dr%2C%20Meridian%2C%20ID%2083646!5e0!3m2!1sen!2sus!4v1785525469084!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            
        </div>
    )
}
export default WorkSite;