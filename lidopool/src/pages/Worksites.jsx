import IdealChem from "../components/table-components/IdealChem"
import TableSearch from "../components/table-components/TableSearch"
import TableComp from "../components/table-components/TableComp"
import NewWorkSite from "../components/form-components/NewWorksite"
import'../css/pages-css/Worksites.css'
import WorksiteSelection from "../components/nav-components/WorksiteSelection"

function Worksites(){
    return(
        <>
            <div className='dashboard-page'>
                <header className='input-header'>
                    <div>
                        <h1>Worksites</h1>
                        <p>View and add new worksites</p>
                    </div>
                </header>
                <main className='chemistry-main'>
                    <div className='newrecord'>
                        <NewWorkSite/>
                    </div>
                    <div className="worksite-right">
                        <IdealChem />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Worksites