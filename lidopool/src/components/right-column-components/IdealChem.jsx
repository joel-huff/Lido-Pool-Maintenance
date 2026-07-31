import { IdealChemData } from "../component-data/IdealChemData"
import ScienceIcon from '@mui/icons-material/Science';
import ChemReads from './ChemReads'
import '../../css/IdealChem.css'

function IdealChem(props){
    return(
        <div className="ideal-class">
            <div className='ideal-container'>
                <header className="title-chem">
                    <p className="title-align"> <ScienceIcon fontSize="medium"/>{props.title}</p>
                </header>
                <main className="content-chem">
                    <ChemReads chemical='Total Chlorine' reads='1.0 - 3.0'/>
                    <ChemReads chemical='Free Chlorine' reads='1.0 - 3.0'/>
                    <ChemReads chemical='pH ppm' reads='7.4 - 7.6'/>
                </main>
                <footer className="ideal-footer"><p>Keeping your water in these ranges helps ensure safety and protection of pool equipment</p></footer>
            </div>
        </div>
    )
}
export default IdealChem