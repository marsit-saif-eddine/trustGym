import { Abonnement } from './types';

export const abonnements: Abonnement[] = [
    {
        id: 1,
        startDate: '27-09-2023',
        endDate: '27-09-2023',
        type: 'Zumba',
        totalAmount: 170,
        remainingAmount: 50,
        status: 'Non payé',
        convention: 'Aucune',
        salle: 'Aucune',
        payments: [
            { id: 1, amount: 50, paymentType: 'Carte', checkNumber: '', bank: '', dueDate: '27-09-2023', status: 'Non payé' }
        ]
    },
    {
        id: 2,
        startDate: '26-09-2023',
        endDate: '26-09-2023',
        type: '3 mois',
        totalAmount: 250,
        remainingAmount: 0,
        status: 'Payé',
        convention: 'Standard',
        salle: 'Gym 1',
        payments: [
            { id: 2, amount: 250, paymentType: 'Virement', checkNumber: '', bank: 'Banque X', dueDate: '26-09-2023', status: 'Payé' }
        ]
    },
    {
        id: 3,
        startDate: '25-09-2023',
        endDate: '25-09-2023',
        type: '2 mois',
        totalAmount: 120,
        remainingAmount: 0,
        status: 'Payé',
        convention: 'Premium',
        salle: 'Gym 2',
        payments: [
            { id: 3, amount: 120, paymentType: 'Espèces', checkNumber: '', bank: '', dueDate: '25-09-2023', status: 'Payé' }
        ]
    },
    {
        id: 4,
        startDate: '27-09-2023',
        endDate: '27-09-2023',
        type: 'Zumba',
        totalAmount: 170,
        remainingAmount: 50,
        status: 'Non payé',
        convention: 'Aucune',
        salle: 'Aucune',
        payments: [
            { id: 4, amount: 50, paymentType: 'Carte', checkNumber: '', bank: '', dueDate: '27-09-2023', status: 'Non payé' }
        ]
    },
];

export default abonnements;
