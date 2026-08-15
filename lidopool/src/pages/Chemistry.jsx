import NewRecord from '../components/form-components/NewRecord'
import WorkSite from '../components/nav-components/WorkSite'
import IdealChem from '../components/table-components/IdealChem'
import { useState } from 'react'
import { useEffect } from 'react'
import './../css/Dashboard.css'


function Chemistry(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <div className='dashboard-page'>
                <header className='input-header'>
                    <div>
                        <h1>New Chemistry Reading</h1>
                        <p>Record and view your pool chemistry readings.</p>
                    </div>
                        <p>
                            {time.toLocaleString()}
                        </p>
                </header>
                <main className='chemistry-main'>
                    <div className='newrecord'>
                        <NewRecord currentTime={time}/>
                    </div>
                    
                    <WorkSite />
                    
                    <div className='idealchem'>
                        <IdealChem />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Chemistry;