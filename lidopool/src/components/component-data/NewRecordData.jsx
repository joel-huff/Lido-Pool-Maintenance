import { Droplets } from 'lucide-react';
import { FlaskRound } from 'lucide-react';
import { Droplet } from 'lucide-react';
import { TestTube } from 'lucide-react';

export const NewRecordData = [
    {
        key: 0,
        heading: 'Free Chlorine (ppm)',
        iconClass: 'droplets-color',
        icon: <Droplets color='#4755a5' size={48}/>,
        range: <p>Ideal: 1.0 - 3.0</p>
    },
    {
        key: 1,
        heading: 'Total Chlorine (ppm)',
        iconClass: 'rflask-color',
        icon: <FlaskRound color='#478aa5' size={48}/>,
        range: <p>Ideal: 1.0 - 3.0</p>
    },
    {
        key: 2,
        heading: 'Total pH (ppm)',
        iconClass: 'droplet-color',
        icon: <Droplet color='#8f47a5' size={48}/>,
        range: <p>Ideal: 7.2 - 7.8</p> 
    },
    {
        key: 3,
        heading: 'Total Alkalinity',
        iconClass: 'testtube-color',
        icon: <TestTube color='#56ac6c' size={48}/>,
        range: <p>Ideal: 80 - 120</p> 
    }
]