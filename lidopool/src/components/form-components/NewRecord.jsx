import { FlaskConical } from 'lucide-react';
import { Save } from 'lucide-react';
import { NewRecordData } from '../component-data/NewRecordData';
import { useState, useRef } from 'react';
import '../../css/form-css/NewRecord.css';


function NewRecord({currentTime}){

    const [readings, setReadings] = useState({
        freeChlorine: '',
        totalChlorin: '',
        ph: '',
        alkalinity: ''
    })
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('Submitted readings:', readings, new Date())
        
    }
    const handleChange = (e) => {
        const{name, value} = e.target;

        setReadings(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <>
            <div className='new-record'>
                <header>
                    <FlaskConical size={40}/>
                    <h1> Water Chemistry</h1>
                </header>
                <form className='input-form' onSubmit={handleSubmit}>
                    {
                        NewRecordData.map((e) => (
                            <div key={e.key} className='input-container' >
                                <h2>{e.heading}</h2>
                                <div className='input-format'>
                                    <label className={e.iconClass}>
                                        {e.icon}
                                    </label>
                                    <input 
                                        value={readings[e.key]} 
                                        type="number" 
                                        placeholder='Enter value' 
                                        min={e.minimum} 
                                        max={e.maximum} 
                                        step={e.steps}
                                        onChange={handleChange}
                                        name={e.name}/>
                                    {e.range}
                                </div>
                            </div>
                        ))
                    }
                    <button className='save-button' type='submit'>
                        <Save size={40}/>
                        Save Reading
                    </button>
                    
                </form>
            </div>

        </>

    )
}
    
export default NewRecord