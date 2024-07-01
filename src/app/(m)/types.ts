export interface Payment {
    id: number; 
    amount: number;
    paymentType: string;
    checkNumber: string;
    bank: string;
    dueDate: string;
    status: string;
}

export interface Abonnement {
    id: number; 
    startDate: string;
    endDate: string;
    type: string;
    totalAmount: number;
    remainingAmount: number;
    status: string;
    convention: string;
    salle: string;
    payments: Payment[];
}
