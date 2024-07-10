"use client";

import React, { useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlinePencil, HiOutlinePlusCircle, HiOutlineTrash } from 'react-icons/hi';
import { FiEdit3, FiSearch, FiChevronDown } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { Select } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { BiFilter } from 'react-icons/bi';
import { Label } from '@/components/ui/label';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const stockMovementData = [
  { id: 1, date: '27-09-2023', type: 'Entrée', salle: 'Lac', article: 'Expresso', quantite: 2, prixUnitaire: 3000, total: 6000, etat: 'Non payé' },
  { id: 2, date: '26-09-2023', type: 'Sortie', salle: 'Centre ville', article: 'Protéine', quantite: 1, prixUnitaire: 9000, total: 9000, etat: 'Payé' },
  { id: 3, date: '25-09-2023', type: 'Sortie', salle: 'Lac', article: 'Jus orange', quantite: 4, prixUnitaire: 15000, total: 60000, etat: 'Payé' },
];

const StockMovementPage: React.FC = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 3;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = stockMovementData.slice(indexOfFirstEntry, indexOfLastEntry);
  const router = useRouter();

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleReturnClick = () => {
    router.push(`/boutique`);
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <Button variant="ghost" onClick={handleReturnClick} className="text-xs flex items-center mb-9">
            <HiOutlineArrowSmLeft className="w-6 h-6 mr-2" />
            Boutique
          </Button>
          <h1 className="text-2xl font-medium text-foreground">Mouvement du stock</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <Button variant="default" className="flex items-center">
          <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
          Ajouter un article
        </Button>
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
                <Label className="block text-sm font-medium text-gray-700">Etat</Label>
                <Select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>Payé</option>
                  <option>Non payé</option>
                </Select>
              </div>
            </div>
          </div>
        )}
        <div className="bg-card rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Salle</TableHeaderCell>
                <TableHeaderCell>Article</TableHeaderCell>
                <TableHeaderCell>Quantité</TableHeaderCell>
                <TableHeaderCell>Prix unitaire</TableHeaderCell>
                <TableHeaderCell>Total</TableHeaderCell>
                <TableHeaderCell>Etat</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.type}</TableCell>
                  <TableCell>{entry.salle}</TableCell>
                  <TableCell>{entry.article}</TableCell>
                  <TableCell>{entry.quantite}</TableCell>
                  <TableCell>{entry.prixUnitaire}</TableCell>
                  <TableCell>{entry.total}</TableCell>
                  <TableCell>
                    <Switch
                      checked={entry.etat === 'Payé'}
                      uncheckedText="Non payé"
                      checkedText="Payé"
                    />
                  </TableCell>
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
              {Array.from({ length: Math.ceil(stockMovementData.length / entriesPerPage) }, (_, i) => i + 1).map(number => (
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
              disabled={currentPage === Math.ceil(stockMovementData.length / entriesPerPage)}
              variant="ghost"
              className={`flex items-center hover:underline ${currentPage === Math.ceil(stockMovementData.length / entriesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
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

export default StockMovementPage;
