import NewServices from '../components/form-components/NewServices'
import WorkSite from '../components/nav-components/WorkSite'
import IdealChem from '../components/table-components/IdealChem'
import { useState } from 'react'
import { useEffect } from 'react'
import './../css/Dashboard.css'


function Services(){
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
                        <h1>New Services Record</h1>
                        <p>Record completed services and chemicals used.</p>
                    </div>
                        <p>
                            {time.toLocaleString()}
                        </p>
                </header>
                <main className='chemistry-main'>
                    <div className='newrecord'>
                        <NewServices/>
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

export default Services;