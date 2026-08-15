import { IdealChemData } from "../component-data/IdealChemData"
import { Search } from 'lucide-react';
import ScienceIcon from '@mui/icons-material/Science';
import TableSearch from "./TableSearch";
import WorksiteSelection from '../nav-components/WorksiteSelection';
import IdealChem from "./IdealChem";
import '../../css/table-css/IdealChem.css';

function TableComp(){
    return(
        // <>
        //     <div className="recent-container">
        //         <h1>Most Recent Readings</h1>
        //         <WorksiteSelection />
        //         <table className='recent-table'>
        //             <thead>
        //                 <tr>
        //                     <th>Date/Time</th>
        //                     <th>Free Chlorine</th>
        //                     <th>Total Chlorine</th>
        //                     <th>pH</th>
        //                     <th>Alkalinity</th>
        //                     <th>Technician</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>July 29, 2025 10:15 AM</td>
        //                     <td>1.8</td>
        //                     <td>2.4</td>
        //                     <td>7.4</td>
        //                     <td>98</td>
        //                     <td>Joel Huff</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //         <div className="workbutton-layout">
        //             <button className="worksite-button">
        //                 + Worksite
        //             </button>
        //             <button className="export-button">
        //                 Export Data
        //             </button>
        //         </div>   
        //     </div>
        // </>
        <>
            <div className='dashboard-page'>
                <main className='chemistry-main'>
                    <div className='newrecord'>
                        <WorksiteSelection />
                        <IdealChem />
                    </div> 
                </main>
            </div>
        </>
    )
}
export default TableComp