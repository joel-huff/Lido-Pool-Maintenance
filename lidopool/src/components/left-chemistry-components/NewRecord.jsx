import { FlaskConical } from 'lucide-react';
import { Save } from 'lucide-react';
import { NewRecordData } from '../component-data/NewRecordData';
import { useState } from 'react';
import '../../css/NewRecord.css';


function NewRecord(props){
    return(
        <>
            <div className='new-record'>
                <header>
                    <FlaskConical size={40}/>
                    <h1> Water Chemistry</h1>
                </header>
                <form className='input-form'>
                    {
                        NewRecordData.map((e) => (
                            <div key={e.key} className='input-container' >
                                <h2>{e.heading}</h2>
                                <div className='input-format'>
                                    <label className={e.iconClass}>
                                        {e.icon}
                                    </label>
                                    <input type="number" placeholder='Enter value'/>
                                    {e.range}
                                </div>
                            </div>
                        ))
                    }
                    <button className='save-button'>
                        <Save size={40}/>
                        Save Reading
                    </button>
                    
                </form>
            </div>

        </>

    )
}
    
export default NewRecord