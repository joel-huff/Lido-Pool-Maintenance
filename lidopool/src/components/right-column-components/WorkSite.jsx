import { useState } from 'react'
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
            <img className='pool-photo' src={poolimage} alt="" />
            <div>
                <h1>{worksiteName}</h1>
                <div className='worksit-info'>
                    <a href={worksiteLink}>{worksiteAddress}</a>
                    <p>Last Service Date: {worksiteDate}</p>
                    <p>Account: {worksiteAccount}</p>
                    <select className="worksite-select" name="" id="" filter="true" onChange={handleWorksiteChange} value={selectedWorksite}>
                        {WorksiteOptions.map((val, key) =>{
                            return(
                                <option key={val.id} value={val.worksite}>{val.worksite}</option>
                            )
                        })}

                    </select>
                </div>
            </div>
        </div>
    )
}
export default WorkSite;