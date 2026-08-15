import { Droplets } from 'lucide-react';
import { FlaskRound } from 'lucide-react';
import { Droplet } from 'lucide-react';
import { TestTube } from 'lucide-react';

export const NewRecordData = [
    {
        key: 0,
        heading: 'Free Chlorine (ppm)',
        iconClass: 'droplets-color',
        icon: <Droplets />,
        range: <p>Ideal: 1.0 - 3.0</p>,
        minimum: '0',
        maximum: '10',
        steps: '1',
        name: 'freeChlorine'
    },
    {
        key: 1,
        heading: 'Total Chlorine (ppm)',
        iconClass: 'rflask-color',
        icon: <FlaskRound />,
        range: <p>Ideal: 1.0 - 3.0</p>,
        minimum: '0',
        maximum: '10',
        steps: '1',
        name: 'totalChlorin'
    },
    {
        key: 2,
        heading: 'Total pH (ppm)',
        iconClass: 'droplet-color',
        icon: <Droplet  />,
        range: <p>Ideal: 7.2 - 7.8</p>,
        minimum: '0',
        maximum: '10',
        steps: '0.2',
        name: 'ph'
    },
    {
        key: 3,
        heading: 'Total Alkalinity',
        iconClass: 'testtube-color',
        icon: <TestTube />,
        range: <p>Ideal: 80 - 120</p>,
        minimum: '0',
        maximum: '240',
        steps: '1',
        name: 'alkalinity'
    }
]