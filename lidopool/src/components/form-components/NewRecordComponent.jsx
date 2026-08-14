import React from 'react';

function NewRecordComponent(props){
    return(
        <div className='input-container'>
            <h2>{props.heading}</h2>
            <div className='input-format'>
                <label className={props.iconClass}>
                    {props.icon}
                </label>
                <input type="number" placeholder='Enter value'/>
                {props.range}
            </div>
        </div>
    )    
}
