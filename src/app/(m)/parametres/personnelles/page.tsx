"use client";
import React, { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash, HiReply, HiOutlinePlusCircle } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const personnelData = [
  { id: 1, name: 'Nom et prénom', role: 'Admin', status: 'Actif' },
  { id: 2, name: 'Nom et prénom', role: 'Caissier', status: 'Non actif' },
  { id: 3, name: 'Nom et prénom', role: 'Caissier', status: 'Actif' },
];

const GestionPersonnelles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const personnelsPerPage = 3;
  const indexOfLastPersonnel = currentPage * personnelsPerPage;
  const indexOfFirstPersonnel = indexOfLastPersonnel - personnelsPerPage;
  const currentPersonnels = personnelData.slice(indexOfFirstPersonnel, indexOfLastPersonnel);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-foreground">Gestion des personnelles</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">

          <Button variant="default" className="flex items-center bg-primary text-white">
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Ajouter un personnel
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
                <TableHeaderCell>Personnel</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Etat</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
                <TableHeaderCell>Détail</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPersonnels.map((personnel) => (
                <TableRow key={personnel.id}>
                  <TableCell>
                    {personnel.name}
                  </TableCell>
                  <TableCell>{personnel.role}</TableCell>
                  <TableCell>
                    <Switch
                      checked={personnel.status === 'Actif'}
                      uncheckedText="Non actif"
                      checkedText="Actif"
                    />
                  </TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="ghost" className="text-[hsl(var(--primary))] p-2 m-0">
                      <HiOutlinePencil />
                    </Button>
                    <Button variant="ghost" className="text-[hsl(var(--destructive))] p-2 m-0">
                      <HiOutlineTrash />
                    </Button>
                  </TableCell>
                  <TableCell className="text-center align-middle">
                    <HiReply className="w-6 h-6 text-[hsl(var(--primary))] cursor-pointer transform scale-x-[-1]" />
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
              {Array.from({ length: Math.ceil(personnelData.length / personnelsPerPage) }, (_, i) => i + 1).map(number => (
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
              disabled={currentPage === Math.ceil(personnelData.length / personnelsPerPage)}
              variant="ghost"
              className={`flex items-center hover:underline ${currentPage === Math.ceil(personnelData.length / personnelsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
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

export default GestionPersonnelles;
