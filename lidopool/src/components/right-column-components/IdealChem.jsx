import { IdealChemData } from "../component-data/IdealChemData"
import ScienceIcon from '@mui/icons-material/Science';
import '../../css/IdealChem.css'

function IdealChem(){
    return(
        <>
            <div className="recent-container">
                <h1>Most Recent Readings</h1>
                <table className='recent-table'>
                    <thead>
                        <tr>
                            <th>Date/Time</th>
                            <th>Free Chlorine</th>
                            <th>Total Chlorine</th>
                            <th>pH</th>
                            <th>Alkalinity</th>
                            <th>Technician</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>July 29, 2025 10:15 AM</td>
                            <td>1.8</td>
                            <td>2.4</td>
                            <td>7.4</td>
                            <td>98</td>
                            <td>Joel Huff</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default IdealChem