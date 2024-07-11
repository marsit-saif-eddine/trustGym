import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HiReply } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { Input } from '@/components/ui/input';
import { FiChevronDown } from "react-icons/fi";
import AbonnementDetails from './AbonnementDetails';
import { abonnements } from '../../../data';
import { Abonnement } from '../../../types';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';

const AbonnementTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAbonnement, setSelectedAbonnement] = useState<Abonnement | null>(null);

    const abonnementsPerPage = 3;
    const indexOfLastAbonnement = currentPage * abonnementsPerPage;
    const indexOfFirstAbonnement = indexOfLastAbonnement - abonnementsPerPage;
    const currentAbonnements = abonnements.slice(indexOfFirstAbonnement, indexOfLastAbonnement);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleDetailClick = (abonnement: Abonnement) => {
        setSelectedAbonnement(abonnement);
    };

    const handleBackClick = () => {
        setSelectedAbonnement(null);
    };

    if (selectedAbonnement) {
        return <AbonnementDetails abonnement={selectedAbonnement} onBack={handleBackClick} />;
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[hsl(var(--primary))]">Frais annuel</CardTitle>
                        <CardDescription>20 TND</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[hsl(var(--destructive))]">Reste à payer</CardTitle>
                        <CardDescription>50 TND</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[hsl(var(--primary))]">Date d&apos;expiration</CardTitle>
                        <CardDescription>15/12/2023</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[hsl(var(--primary))]">Nbr d&apos;abonnement</CardTitle>
                        <CardDescription>3</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="flex items-center justify-between mb-4">
                <Button variant="outline" className="flex items-center text-default border border-gray-300 rounded-md">
                    <BiFilter className="mr-2" />
                    Filtre
                    <FiChevronDown className="ml-2"/>
                </Button>
                <div className="relative w-full md:w-1/3 mt-4 md:mt-0">
                    <Input
                        type="text"
                        placeholder="Recherche"
                        className="pl-10"
                    />
                    <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div className="bg-card rounded-lg shadow">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Date début</TableHeaderCell>
                            <TableHeaderCell>Date fin</TableHeaderCell>
                            <TableHeaderCell>Type d&apos;abonnement</TableHeaderCell>
                            <TableHeaderCell>Montant total</TableHeaderCell>
                            <TableHeaderCell>Reste à payer</TableHeaderCell>
                            <TableHeaderCell>Etat</TableHeaderCell>
                            <TableHeaderCell>Detail</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentAbonnements.map((abonnement, index) => (
                            <TableRow key={index}>
                                <TableCell>{abonnement.startDate}</TableCell>
                                <TableCell>{abonnement.endDate}</TableCell>
                                <TableCell>{abonnement.type}</TableCell>
                                <TableCell>{abonnement.totalAmount}</TableCell>
                                <TableCell>{abonnement.remainingAmount}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-white text-center text-xs font-medium ${abonnement.status === 'Payé' ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {abonnement.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center">
                                    <HiReply className="w-6 h-6 text-[hsl(var(--primary))] cursor-pointer transform scale-x-[-1]" onClick={() => handleDetailClick(abonnement)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                    <Button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        <FaArrowLeft className="mr-2" />
                        Précédent
                    </Button>
                    <div className="flex space-x-2 mt-4 sm:mt-0">
                        {Array.from({ length: Math.ceil(abonnements.length / abonnementsPerPage) }, (_, i) => i + 1).map(number => (
                            <Button
                                key={number}
                                onClick={() => paginate(number)}
                                variant={currentPage === number ? "default" : "ghost"}
                                className={`rounded-[6px] px-3 py-1 ${currentPage === number ? 'bg-primary text-primary-foreground' : ''}`}
                            >
                                {number}
                            </Button>
                        ))}
                    </div>
                    <Button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(abonnements.length / abonnementsPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(abonnements.length / abonnementsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AbonnementTable;
