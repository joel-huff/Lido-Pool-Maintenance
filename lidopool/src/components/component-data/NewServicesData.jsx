import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { PaperBag } from 'lucide-react';

export const NewCleanServicesData = [
    {
        key: 0,
        heading: 'Did you vacuum the pool?',
        id: 'vacuum'
    },
    {
        key: 1,
        heading: 'Did you clean the bathroom?',
        id: 'bathroom'
    },
    {
        key: 2,
        heading: 'Did you tidy the furniture?',
        id: 'furnity'
    }
]

export const NewChemServicesData = [
    {
        key: 0,
        heading: 'Chlorine Tabs',
        icon: <Database/>,
        iconClass: 'chlorine-icon',
        measure: 'tabs',
        id: 'chlorine'
    },
    {
        key: 1,
        heading: 'Shock Scoops',
        icon: <Zap/>,
        iconClass: 'shock-icon',
        measure: 'scoops',
        id: 'shock'
    },
    {
        key: 2,
        heading: 'Soda Ash Scoops',
        icon: <PaperBag/>,
        iconClass: 'soda-icon',
        measure: 'scoops',
        id: 'ash'
    },
    {
        key: 3,
        heading: 'Sodium Bicarb Scoops',
        icon: <PaperBag/>,
        iconClass: 'sodium-icon',
        measure: 'scoops',
        id: 'bicarb'
    }
]