import { ClipboardList } from 'lucide-react';
import { Save } from 'lucide-react';
import { NewCleanServicesData } from '../component-data/NewServicesData';
import {NewChemServicesData} from '../component-data/NewServicesData';
import { useState } from 'react';
import '../../css/form-css/NewServices.css';


function NewServices(){
    const [selectedYNIndex, setSelectedYNIndex] = useState(0);

    return(
        <>
            <div className='new-record'>
                <header>
                    <ClipboardList size={40}/>
                    <h1>New Service Record</h1>
                </header>
                <form className='input-form'>
                    {
                        NewCleanServicesData.map((e) => (
                            <div className='cleaning-bool'>
                                <div key={e.key}>
                                    <h2>{e.heading}</h2>
                                </div>
                                <label htmlFor=""><input name={e.key} type="radio" value='yes'/> Yes</label>
                                <label htmlFor=""><input name={e.key} type="radio" value='no' /> No</label>
                                
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
                                    <input type="number" placeholder='Enter value'/>
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