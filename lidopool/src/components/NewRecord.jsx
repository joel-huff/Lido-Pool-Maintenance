import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { NewRecordData } from './component-data/NewRecordData';
import { ServicesData } from './component-data/ServicesData';
import '../css/NewRecord.css';

function NewRecord(){
    return(
        <div className='input-component'>
            <div className="record-container">
                <header className='record-header'>
                    <h2><WaterDropIcon />Water Chemistry</h2>
                    <p>Date & Time</p>
                </header>
                <main className='form-main'>
                    <form  action="">
                        {NewRecordData.map((val, key)=>{
                            return(
                                <div className='form-main'>
                                    <div className="input-range">
                                        <label key={key} htmlFor={val.id}>{val.label}   </label>
                                        <div className='input-form'>
                                            <input className='chemical-input' type="text" name={val.id}id={val.id} />
                                            <p className='range-class'>✓ In range</p>
                                        </div>
                                        <p>Measurements are done at a 0.0 - 10.0 scale</p>
                                    </div>
                                </div>
                            )
                        })}
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