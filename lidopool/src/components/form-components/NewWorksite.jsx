import { NewWorksiteData } from "../component-data/NewWorksiteData";

function NewWorkSite(){
    return(
        <>
            <div className='new-record'>
                <header>
                    <h1>New Worksite</h1>
                </header>
                <form className='input-form'>
                    {
                        NewWorksiteData.map((e) => (
                            <div className='input-container'>
                                <h2>{e.heading}</h2>
                                <div className='input-format'>
                                    <label>
                                        {e.icon}
                                    </label>
                                        <input type='text'/>
                                </div>
                            </div>
                        ))
                    }

                    
                    <button className='save-button'>
                        Save Reading
                    </button>
                    
                </form>
            </div>

        </>

    )
}
    
export default NewWorkSite