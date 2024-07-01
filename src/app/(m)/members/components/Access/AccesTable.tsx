import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiOutlinePrinter, HiOutlineDownload } from 'react-icons/hi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';


const accessData = [
    { id: 'TG-456', date: '27-09-2023', time: '14:17', gate: 2, type: 'Entrée' },
    { id: 'TG-456', date: '26-09-2023', time: '11:53', gate: 5, type: 'Sortie' },
    { id: 'TG-456', date: '25-09-2023', time: '10:58', gate: 3, type: 'Sortie' },
    // Add more data as needed
];

const AccesTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const accessesPerPage = 3;
    const indexOfLastAccess = currentPage * accessesPerPage;
    const indexOfFirstAccess = indexOfLastAccess - accessesPerPage;
    const currentAccesses = accessData.slice(indexOfFirstAccess, indexOfLastAccess);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <Button variant="outline" className="flex items-center text-default border border-gray-300 rounded-md">
                    <BiFilter className="mr-2" />
                    Filtre
                    <FiChevronDown className="ml-2" />
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
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Date</TableHeaderCell>
                        <TableHeaderCell>Heure</TableHeaderCell>
                        <TableHeaderCell>Porte</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Imprimer</TableHeaderCell>
                        <TableHeaderCell>Télécharger</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentAccesses.map((access, index) => (
                        <TableRow key={index}>
                            <TableCell>{access.id}</TableCell>
                            <TableCell>{access.date}</TableCell>
                            <TableCell>{access.time}</TableCell>
                            <TableCell>{access.gate}</TableCell>
                            <TableCell>{access.type}</TableCell>
                            <TableCell>
                                <HiOutlinePrinter className="w-4 h-4 text-muted-foreground cursor-pointer" />
                            </TableCell>
                            <TableCell>
                                <HiOutlineDownload className="w-4 h-4 text-muted-foreground cursor-pointer" />
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
                    {Array.from({ length: Math.ceil(accessData.length / accessesPerPage) }, (_, i) => i + 1).map(number => (
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
                    disabled={currentPage === Math.ceil(accessData.length / accessesPerPage)}
                    variant="ghost"
                    className={`flex items-center hover:underline ${currentPage === Math.ceil(accessData.length / accessesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                    Suivant
                    <FaArrowRight className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default AccesTable;
