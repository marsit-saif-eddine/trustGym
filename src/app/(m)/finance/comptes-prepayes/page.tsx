"use client";

import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const prepayData = [
  { id: 1, user: 'Nom et prénom', date: '27-09-2023', amount: '25.000', type: 'Entrée', personnel: 'Ahmed' },
  { id: 2, user: 'Nom et prénom', date: '28-09-2023', amount: '6.000', type: 'Sortie', personnel: 'Sami' },
  { id: 3, user: 'Nom et prénom', date: '25-09-2023', amount: '45.000', type: 'Entrée', personnel: 'Meriam' },
];

const PrepayPage: React.FC = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 3;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = prepayData.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleAddPrepayClick = () => {
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-medium text-foreground">Alimentation des comptes prepayés</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
          <Button
            variant="outline"
            className="flex items-center text-default border border-gray-300 rounded-md mb-4 lg:mb-0"
            onClick={() => setFilterVisible(!filterVisible)}
          >
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
        {filterVisible && (
          <div className="bg-[hsl(var(--primary-foreground))] p-4 rounded-[12px] border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <Label className="block text-sm font-medium text-gray-700">Type</Label>
                <Select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>Entrée</option>
                  <option>Sortie</option>
                </Select>
              </div>
            </div>
          </div>
        )}
        <div className="bg-card rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Utilisateur</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Montant du solde</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Personnel</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                    <img src="/images/profile-icon-png.png" alt="Person" className="w-10 h-10 rounded-full" />
                    <div>{entry.user}</div>
                    </div>
                  </TableCell>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.amount}</TableCell>
                  <TableCell>{entry.type}</TableCell>
                  <TableCell>{entry.personnel}</TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="ghost" className="text-primary p-2 m-0">
                      <HiOutlinePencil />
                    </Button>
                    <Button variant="ghost" className="text-destructive p-2 m-0">
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
              {Array.from({ length: Math.ceil(prepayData.length / entriesPerPage) }, (_, i) => i + 1).map(number => (
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
              disabled={currentPage === Math.ceil(prepayData.length / entriesPerPage)}
              variant="ghost"
              className={`flex items-center hover:underline ${currentPage === Math.ceil(prepayData.length / entriesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              Suivant
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepayPage;
