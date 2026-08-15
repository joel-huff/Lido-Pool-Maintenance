import {WorksiteOptions} from '../component-data/WorksiteOptions'

function WorksiteSelection({onChange, value}){
    return(
        <>
            <select className="worksite-select" name="" id="" filter="true" onChange={onChange} value={value}>
                {WorksiteOptions.map((val, key) =>{
                    return(
                        <option key={val.id} value={val.worksite}>{val.worksite}</option>
                            )
                    })}
            </select>    
        </>

    )
}

export default WorksiteSelection