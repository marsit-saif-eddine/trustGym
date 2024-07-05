import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight, FaTrash, FaEdit } from 'react-icons/fa';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Input } from '@/components/ui/input';
import { HiOutlinePencil, HiOutlinePlusCircle, HiOutlineTrash } from 'react-icons/hi';
import { AddSoldeModal, DeleteSoldeModal, EditSoldeModal } from './Modals';

const soldeData = [
    { date: '27-09-2023', montant: 25000, personnel: 'Ahmed' },
    { date: '26-09-2023', montant: 6000, personnel: 'Sami' },
    { date: '25-09-2023', montant: 45000, personnel: 'Meriam' },
];

const SoldeTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isDialogEditSoldeOpen, setIsDialogEditSoldeOpen] = useState(false);
    const [isDialogDeleteSoldeOpen, setIsDialogDeleteSoldeOpen] = useState(false); 
    const [isDialogAddSoldeOpen, setIsDialogAddSoldeOpen] = useState(false); 
    const soldesPerPage = 3;
    const indexOfLastSolde = currentPage * soldesPerPage;
    const indexOfFirstSolde = indexOfLastSolde - soldesPerPage;
    const currentSoldes = soldeData.slice(indexOfFirstSolde, indexOfLastSolde);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-500">Solde</CardTitle>
                        <CardDescription>120 DT</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <Button variant="default" onClick={() => setIsDialogAddSoldeOpen(true)} className="flex items-center mb-4">
                <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
                Ajouter un solde
            </Button>

            <div className="bg-card rounded-lg shadow">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Montant du solde</TableHeaderCell>
                            <TableHeaderCell>Personnel</TableHeaderCell>
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentSoldes.map((solde, index) => (
                            <TableRow key={index}>
                                <TableCell>{solde.date}</TableCell>
                                <TableCell>{solde.montant.toFixed(3)}</TableCell>
                                <TableCell>{solde.personnel}</TableCell>
                                <TableCell className="flex">
                                    <Button onClick={() => setIsDialogEditSoldeOpen(true)} variant="ghost" className="flex items-center text-[hsl(var(--primary))] p-2 m-0">
                                        <HiOutlinePencil />
                                    </Button>
                                    <Button variant="ghost" onClick={() => setIsDialogDeleteSoldeOpen(true)} className="flex items-center text-[hsl(var(--destructive))] p-2 m-0">
                                        <HiOutlineTrash />
                                    </Button>
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
                        {Array.from({ length: Math.ceil(soldeData.length / soldesPerPage) }, (_, i) => i + 1).map(number => (
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
                        disabled={currentPage === Math.ceil(soldeData.length / soldesPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(soldeData.length / soldesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            <DeleteSoldeModal isOpen={isDialogDeleteSoldeOpen} onClose={() => setIsDialogDeleteSoldeOpen(false)} />
            <AddSoldeModal isOpen={isDialogAddSoldeOpen} onClose={() => setIsDialogAddSoldeOpen(false)} />
            <EditSoldeModal isOpen={isDialogEditSoldeOpen} onClose={() => setIsDialogEditSoldeOpen(false)} />

        </div>
    );
};

export default SoldeTable;
