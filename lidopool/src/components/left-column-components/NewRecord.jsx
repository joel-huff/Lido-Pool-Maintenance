import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { NewRecordData } from '../component-data/NewRecordData';
import { ServicesData } from '../component-data/ServicesData';
import { useState } from 'react';
import InputBox from './InputBox';
import '../../css/NewRecord.css';

function NewRecord(props){
    const [totChQuantity, setTotChQuantity] = useState(0);
    const [freeChQuantity, setFreeChQuantity] = useState(0);
    const [phQuantity, setPhQuantity] = useState(0);
    const pInRange = "✓ In range";
    const pOutRange = "Out of Range";
    const isTotInRange = totChQuantity <= 3.0 && totChQuantity >= 1.0;
    const isFreeInRange = freeChQuantity <= 3.0 && freeChQuantity >= 1.0;
    const isPhInRange = phQuantity <= 7.8 && phQuantity >= 7.0;
    const rangeValuePar = <p>Measurements are done at a 0.0 - 10.0 scale</p>

    return(
        <div className='input-component'>
            <div className="record-container">
                <header className='record-header'>
                    <h2><WaterDropIcon />Water Chemistry</h2>

                </header>
                <main className='form-main'>
                    <form  action="">
                        <div className="input-range">
                            <label >Free Chlorine</label>
                        <div className='input-form'>
                            <input className='chemical-input' value={totChQuantity} onChange={(e) => setTotChQuantity(e.target.value)}
                            type="number" min='0' max='10' step='.1' name='totCholrine' id='totCholrine' />
                            <p className={isTotInRange ? "in-range-class" : "out-range-class"}>{isTotInRange ? pInRange : pOutRange}</p>
            
                        </div>
                            {rangeValuePar}
                        </div>
                        <div className="input-range">
                            <label>Total Chlorine</label>
                        <div className='input-form'>
                            <input className='chemical-input' value={freeChQuantity} onChange={(e) => setFreeChQuantity(e.target.value)}
                            type="number" min='0' max='10' step='.1' name='totCholrine' id='totCholrine' />
                            <p className={isFreeInRange ? "in-range-class" : "out-range-class"}>{isFreeInRange ? pInRange : pOutRange}</p>
                        </div>
                            {rangeValuePar}
                        </div>

                        <div className="input-range">
                            <label>Total pH</label>
                        <div className='input-form'>
                            <input className='chemical-input' value={phQuantity} onChange={(e) => setPhQuantity(e.target.value)}
                            type="number" min='0' max='10' step='.1' name='totCholrine' id='totCholrine' />
                            <p className={isPhInRange ? "in-range-class" : "out-range-class"}>{isPhInRange ? pInRange : pOutRange}</p>
                        </div>
                            {rangeValuePar}
                        </div>
                        <div className='form-notes'>
                            <div className='check-format'>
                            {ServicesData.map((val, key)=>{
                                return(
                                    <div className='form-checks'>
                                        <input key={key} type='checkbox' id={val.title} name={val.title} value={val.title}/>
                                        <label htmlFor="vacuum">{val.label}</label>
                                    </div>
                                )
                            }
                            )}
                            </div>
                            <div className='submit-buttons'>
                                <input className='submit-button' type="submit" />
                                <button className='clear-button'>Clear</button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
                <footer className='form-foot'>
                    <p>All submitted notes are saved to internal system including geo-tag and timestamp</p>
                </footer>
            
        </div>
        
    )
}
    
export default NewRecord