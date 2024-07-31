import {single, double, triple} from '../assets/index'

export const screenText = {
    home: {
        title: 'GROWING WITH DATA ANALYTICS',
        title_2: 'Grow with data.',
        paragraph: 'Fast, flexible financing for',
        dynamic_strings: ['BTC' , 'BTB', 'SASS']
    },
    analytics: {
        title: 'DATA ANALYTICS DASHBOARD',
        title_2: 'Manage Data Analytics Centrally'
    }
}

export const navLinks = [
    {
        id: 'home',
        title: 'Home',
        link: '#home'
    },

    {
        id: 'company',
        title: 'Company',
        link: '#home'
    },

    {
        id: 'resources',
        title: 'Resources',
        link: '#home'
    },

    {
        id: 'about',
        title: 'About',
        link: '#home'
    },

    {
        id: 'contact',
        title: 'Contact',
        link: '#home'
    },
]

export const colors = {
    green: '#00df9a',
    black: '#000300'
}

export const plans = {
    singlePlan: {
        title: 'Single User',
        price: '$149',
        storage: '500 GB Storage',
        sendUpTo: 'Send up to 2 GB',
        usersAllowed: '1 User Allowed',
        image: single
    },

    partnershipPlan: {
        title: 'Partnership',
        price: '$199',
        storage: '1 TB Storage',
        sendUpTo: 'Send up to 10 GB',
        usersAllowed: '3 Users Allowed',
        image: double
    },

    groupPlan: {
        title: 'Group Account',
        price: '$299',
        storage: '5 TB Storage',
        sendUpTo: 'Send up to 20 GB',
        usersAllowed: '10 Users Allowed',
        image: triple
    }
}

export const items = {
    solutions: {
        items: [
            'Analytics',
            'Marketing',
            'Commerce',
            'Insights'
        ]
    }
}