import { useState } from 'react'
import { MapPin } from 'lucide-react';
import poolimage from '../../assets/Backyardpool.jpg'
import '../../css/form-css/WorkSite.css'
import {WorksiteOptions} from '../component-data/WorksiteOptions'
import WorksiteSelection from './WorksiteSelection';

function WorkSite(){
    const [selectedWorksite, setSelectedWorksite] = useState(WorksiteOptions[0].worksite);
    const [worksiteName, setWorksiteName] = useState(selectedWorksite)
    const [worksiteLink, setWorksiteLink] = useState(WorksiteOptions[0].google_links)



    const handleWorksiteChange = (e) => {
        const value = e.target.value;
        setSelectedWorksite(value);
        const worksiteInfo = WorksiteOptions.find((item) => item.worksite === value);
        if (worksiteInfo) {
            setWorksiteName(worksiteInfo.worksite);
            setWorksiteLink(worksiteInfo.google_links)
            console.log("Selected:", worksiteInfo.worksite);
            console.log("Worksite info:", worksiteInfo.address);
            console.log("Google link:", worksiteInfo.google_links);
        }
        else{
            setWorksiteName('Hello')
        }
    };

    return(
        <div className='worksite-container'>
            <h1><MapPin/>Select Pool</h1>
            <WorksiteSelection onChange={handleWorksiteChange} value={selectedWorksite}/>
            <div className='map-container'>
                <iframe src={worksiteLink} width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </div>
    )
}
export default WorkSite;