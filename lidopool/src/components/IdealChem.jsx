import { IdealChemData } from "./component-data/IdealChemData"
import ScienceIcon from '@mui/icons-material/Science';
import '../css/IdealChem.css'

function IdealChem(){
    return(
        <div className="ideal-class">
            <div className='ideal-container'>
                <header className="title-chem">
                    <p className="title-align"> <ScienceIcon fontSize="medium"/>Chemistry Ideal Ranges</p>
                </header>
                <main className="content-chem">
                    {IdealChemData.map((val, key)=>{
                        return(
                            <div className="ideal-details" key={key}>
                                <p>{val.title}</p>
                                <p className="range-num">{val.range}</p>
                                <div className="ideal-line"/>
                            </div>
                            )
                        })}
                </main>
                <footer className="ideal-footer"><p>Keeping your water in these ranges helps ensure safety and protection of pool equipment</p></footer>
            </div>
        </div>
    )
}
export default IdealChem