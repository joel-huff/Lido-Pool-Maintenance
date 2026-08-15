import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { PaperBag } from 'lucide-react';

export const NewCleanServicesData = [
    {
        key: 0,
        heading: 'Did you vacuum the pool?',
        name: 'vacuum'
    },
    {
        key: 1,
        heading: 'Did you clean the bathroom?',
        name: 'bathroom'
    },
    {
        key: 2,
        heading: 'Did you tidy the furniture?',
        name: 'furnity'
    }
]

export const NewChemServicesData = [
    {
        key: 0,
        heading: 'Chlorine Tabs',
        icon: <Database/>,
        iconClass: 'chlorine-icon',
        measure: 'tabs',
        id: 'chlorine',
        minimum: '0',
        maximum: '30',
        steps: '1.0',
        name: 'chlorineTabs'
    },
    {
        key: 1,
        heading: 'Shock Scoops',
        icon: <Zap/>,
        iconClass: 'shock-icon',
        measure: 'scoops',
        id: 'shock',
        minimum: '0',
        maximum: '30',
        steps: '1.0',
        name: 'shockScoops'
    },
    {
        key: 2,
        heading: 'Soda Ash Scoops',
        icon: <PaperBag/>,
        iconClass: 'soda-icon',
        measure: 'scoops',
        id: 'ash',
        minimum: '0',
        maximum: '50',
        steps: '1.0',
        name: 'sodaScoops'
    },
    {
        key: 3,
        heading: 'Sodium Bicarb Scoops',
        icon: <PaperBag/>,
        iconClass: 'sodium-icon',
        measure: 'scoops',
        id: 'bicarb',
        minimum: '0',
        maximum: '50',
        steps: '1.0',
        name: 'bicarbScoops'
    }
]