import NewRecord from './left-column-components/NewRecord'
import WorkSite from './right-column-components/WorkSite'
import PrevChem from './right-column-components/PrevChem'
import IdealChem from './right-column-components/IdealChem'

function Dashboard(){
    return(
        <>
            <header>
              <h1>New Pool Reading</h1>
              <p>Enter water chemistry readings for the selected pool</p>
            </header>
            <div className='left-column'>
              <NewRecord/>
            </div>
            <ul className='right-column'>
                <li className='right-components'>
                    <WorkSite/>
                </li>
                <li className='right-components'>
                    <PrevChem title='Recent Reading'/>
                </li>
                <li className='right-components'>
                  <IdealChem title='Chemistry Ideal Ranges'/>
                </li>
            </ul> 
        </>
    )
}

export default Dashboard;