import IdealChem from "../components/table-components/IdealChem"

function Alerts(){
    return(
        <>
            <div className='dashboard-page'>
                <header className='input-header'>
                    <div>
                        <h1>Alerts</h1>
                        <p>View records of recent chemical readings that are out of range</p>
                    </div>
                </header>
                <main>
                    <IdealChem />
                </main>
            </div>
        </>
    )
}

export default Alerts