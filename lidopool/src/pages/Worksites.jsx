import IdealChem from "../components/table-components/IdealChem"
import TableSearch from "../components/table-components/TableSearch"
import TableComp from "../components/table-components/TableComp"
import'../css/pages-css/Worksites.css'

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
                <main>
                    <TableComp />
                </main>
            </div>
        </>
    )
}

export default Worksites