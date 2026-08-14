import IdealChem from "../components/table-components/IdealChem"

function Readings(){
    return(
        <>
            <div className='dashboard-page'>
                <header className='input-header'>
                    <div>
                        <h1>Readings History</h1>
                        <p>View pool readings</p>
                    </div>
                </header>
                <main>
                    <IdealChem />
                </main>
            </div>
        </>
    )
}

export default Readings