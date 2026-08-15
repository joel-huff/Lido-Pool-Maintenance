import { ClipboardList } from 'lucide-react';
import { Save } from 'lucide-react';
import { NewCleanServicesData } from '../component-data/NewServicesData';
import {NewChemServicesData} from '../component-data/NewServicesData';
import { useState } from 'react';
import '../../css/form-css/NewServices.css';


function NewServices(){
    const [radioReadings, setRadioReadings] = useState({
        vacuum: 'yes',
        bathroom: 'yes',
        furniture: 'yes'
    })
    const [readings, setReadings] = useState({
        chlorineTabs: '',
        shockScoops: '',
        sodaScoops: '',
        bicarbScoops: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(readings); 
    }

    const handleChange = (e) => {
        const{name, value} = e.target;

        setReadings(prev => ({
            ...prev,
            [name]:value
        }))
    }

    return(
        <>
            <div className='new-record'>
                <header>
                    <ClipboardList size={40}/>
                    <h1>New Service Record</h1>
                </header>
                <form className='input-form' onSubmit={handleSubmit}>
                    {
                        NewCleanServicesData.map((e) => (
                            <div key={e.key} className='cleaning-bool'>
                                <div >
                                    <h2>{e.heading}</h2>
                                </div>
                                <label htmlFor=""><input checked={radioReadings===e.name}  name={e.name} type="radio" value='yes'/> Yes</label>
                                <label htmlFor=""><input checked={radioReadings===e.name}  name={e.name} type="radio" value='no' /> No</label>
                                
                            </div>
                        ))
                    }
                    {
                        NewChemServicesData.map((e) => (
                            <div key={e.key}>
                                <h2>{e.heading}</h2>
                                <div className='services-input'>
                                    <label className={e.iconClass}>
                                        {e.icon}
                                    </label>
                                    <input 
                                        type="number" 
                                        placeholder='Enter value' 
                                        min={e.minimum} 
                                        max={e.maximum} 
                                        step={e.steps}
                                        onChange={handleChange}
                                        name={e.name}/>
                                </div>
                            </div>
                        ))
                    }
                    <button className='save-button'>
                        <Save size={40}/>
                        Save Record
                    </button>
                    
                </form>
            </div>

        </>

    )
}
    
export default NewServices