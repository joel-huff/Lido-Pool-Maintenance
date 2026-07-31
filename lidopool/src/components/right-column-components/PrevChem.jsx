import ScienceIcon from '@mui/icons-material/Science';
import ChemReads from './ChemReads'
import '../../css/IdealChem.css'

function PrevChem(props){

    const totChlrPrev = '1.0'
    const freeChlrPrev = "2.0"
    const phPrev = "6.0"

    return(
        <div className="ideal-class">
            <div className='ideal-container'>
                <header className="title-chem">
                    <p className="title-align"> <ScienceIcon fontSize="medium"/>{props.title}</p>
                </header>
                <main className="content-chem">
                    <ChemReads chemical='Total Chlorine' reads={ totChlrPrev }/>
                    <ChemReads chemical='Free Chlorine' reads={ freeChlrPrev }/>
                    <ChemReads chemical='pH' reads={ phPrev }/>
                </main>
                <footer className="ideal-footer"><p>Keeping your water in these ranges helps ensure safety and protection of pool equipment</p></footer>
            </div>
        </div>
    )
}
export default PrevChem