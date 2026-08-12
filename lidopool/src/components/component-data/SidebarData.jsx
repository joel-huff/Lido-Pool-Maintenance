import HomeIcon from '@mui/icons-material/Home';
import PoolIcon from '@mui/icons-material/Pool';
import ScienceIcon from '@mui/icons-material/Science';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { FlaskConical } from 'lucide-react';
import { Toolbox } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';

export const SidebarData = [
    {
        title: "Chemistry",
        icon: <FlaskConical/>,
        link: '/'
    },
    {
        title: "Services",
        icon: <Toolbox/>,
        link: '/'
    },
    {
        title: "Readings",
        icon: <ChartNoAxesColumnIncreasing/>,
        link: '/'
    },
    {
        title: "Worksites",
        icon: <MapPin/>,
        link: '/'
    },
    {
        title: "Alerts",
        icon: <TriangleAlert/>,
        link: '/'
    }
]