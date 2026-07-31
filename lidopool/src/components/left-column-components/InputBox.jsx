import {useState} from 'react';
function InputBox(props){
    const [quantity, setQuantity] = useState(0);
    const pInRange = "✓ In range";
    const pOutRange = "Out of Range";
    const isInRange = quantity <= 3.0 && quantity >= 1.0


    return(
        <>
            <div className='form-main'>
                <div className="input-range">
                    <label htmlFor={props.htmlFor}>{props.label}</label>
                <div className='input-form'>
                    <input className='chemical-input' value={quantity} onChange={(e) => setQuantity(e.target.value)}
                         type="number" min='0' max='10' step='.1' name='totCholrine' id='totCholrine' />
                    <p className={isInRange ? "in-range-class" : "out-range-class"}>{isInRange ? pInRange : pOutRange}</p>
            
                </div>
                    <p>Measurements are done at a 0.0 - 10.0 scale</p>
                </div>
            </div>
        </>
    )
}

export default InputBox