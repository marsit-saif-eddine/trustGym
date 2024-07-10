"use client";
import React, { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash, HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Select } from '@/components/ui/select';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Label } from '@/components/ui/label';

const conventionsData = [
  { id: 1, title: 'Normale', type: 'Famille', reductionPercent: '10%', reductionDT: '----' },
  { id: 2, title: 'Etudiant', type: '----', reductionPercent: '----', reductionDT: '250 DT' },
  { id: 3, title: 'Couple', type: '----', reductionPercent: '----', reductionDT: '700 DT' },
];

const GestionConventionsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const conventionsPerPage = 3;
  const indexOfLastConvention = currentPage * conventionsPerPage;
  const indexOfFirstConvention = indexOfLastConvention - conventionsPerPage;
  const currentConventions = conventionsData.slice(indexOfFirstConvention, indexOfLastConvention);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-foreground">Gestion des conventions</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">

          <Button variant="default" className="flex items-center bg-primary text-white">
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Ajouter une convention
            </Button>
          <Button variant="default" className="flex items-center text-[hsl(var(--primary))] bg-primary/10">
            <HiOutlinePencil className="w-4 h-4" />
          </Button>
        </div>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
  <div className="flex items-center space-x-2">
    <Label className="text-primary">État</Label>
    <Select className="bg-card border border-border rounded-[6px] p-2">
      <option value="actif">Actif</option>
      <option value="non-actif">Non actif</option>
    </Select>
  </div>
  <div className="relative w-full md:w-1/3 mt-4 md:mt-0">
    <Input type="text" placeholder="Recherche" className="pl-10" />
    <svg
      className="absolute left-3 top-3 w-5 h-5 text-muted-foreground"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
</div>

        <div className="bg-card rounded-lg shadow">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Titre</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Réduction %</TableHeaderCell>
              <TableHeaderCell>Réduction DT</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentConventions.map((convention) => (
              <TableRow key={convention.id}>
                <TableCell>{convention.title}</TableCell>
                <TableCell>{convention.type}</TableCell>
                <TableCell>{convention.reductionPercent}</TableCell>
                <TableCell>{convention.reductionDT}</TableCell>
                <TableCell className="flex space-x-2">
                  <Button variant="ghost" className="text-[hsl(var(--primary))] p-2 m-0">
                    <HiOutlinePencil />
                  </Button>
                  <Button variant="ghost" className="text-[hsl(var(--destructive))] p-2 m-0">
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
            {Array.from({ length: Math.ceil(conventionsData.length / conventionsPerPage) }, (_, i) => i + 1).map(number => (
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
            disabled={currentPage === Math.ceil(conventionsData.length / conventionsPerPage)}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === Math.ceil(conventionsData.length / conventionsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
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

export default GestionConventionsPage;
