"use client";
import React, { useState } from 'react';
import { HiOutlinePencil, HiOutlinePlusCircle, HiOutlineTrash } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { FiChevronDown } from 'react-icons/fi';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { AddSeanceModal, EditSeanceModal, DeleteSeanceModal } from '../components/Modals'; 

const seancesData = [
  { id: 1, coach: 'Nom et prénom', date: '27-09-2023', heure: '12:00', salle: 'Lac', etat: 'Non payé' },
  { id: 2, coach: 'Nom et prénom', date: '26-09-2023', heure: '12:00', salle: 'Centre ville', etat: 'Payé' },
  { id: 3, coach: 'Nom et prénom', date: '25-09-2023', heure: '12:00', salle: 'Gammarth', etat: 'Payé' },
];

const ListDesSeances: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const seancesPerPage = 3;
  const [filterVisible, setFilterVisible] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const indexOfLastSeance = currentPage * seancesPerPage;
  const indexOfFirstSeance = indexOfLastSeance - seancesPerPage;
  const currentSeances = seancesData.slice(indexOfFirstSeance, indexOfLastSeance);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
  <div>
    <h1 className="text-2xl font-medium text-foreground">Listes des séances</h1>
    <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
  </div>
  <Button variant="default" className="flex items-center" onClick={() => setIsAddModalOpen(true)}>
    <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
    Ajouter séance
  </Button>
</header>
<div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
  <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
    <Button
      variant="outline"
      className="flex items-center text-default border border-gray-300 rounded-md"
      onClick={() => setFilterVisible(!filterVisible)}
    >
      <BiFilter className="mr-2" />
      Filtre
      <FiChevronDown className="ml-2" />
    </Button>
    <div className="relative w-full md:w-1/3">
      <Input type="text" placeholder="Recherche" className="pl-10" />
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
                <TableHeaderCell>Coach</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Heure</TableHeaderCell>
                <TableHeaderCell>Salle</TableHeaderCell>
                <TableHeaderCell>Etat</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentSeances.map((seance) => (
                <TableRow key={seance.id}>
                  <TableCell>{seance.coach}</TableCell>
                  <TableCell>{seance.date}</TableCell>
                  <TableCell>{seance.heure}</TableCell>
                  <TableCell>{seance.salle}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={seance.etat === 'Payé'}
                        uncheckedText="Non payé"
                        checkedText="Payé"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="ghost" className="text-[hsl(var(--primary))] p-2 m-0" onClick={() => setIsEditModalOpen(true)}>
                      <HiOutlinePencil />
                    </Button>
                    <Button variant="ghost" className="text-[hsl(var(--destructive))] p-2 m-0" onClick={() => setIsDeleteModalOpen(true)}>
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
              {Array.from({ length: Math.ceil(seancesData.length / seancesPerPage) }, (_, i) => i + 1).map((number) => (
                <Button
                  key={number}
                  onClick={() => paginate(number)}
                  variant={currentPage === number ? 'default' : 'ghost'}
                  className={`rounded-[6px] px-3 py-1 ${currentPage === number ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  {number}
                </Button>
              ))}
            </div>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(seancesData.length / seancesPerPage)}
              variant="ghost"
              className={`flex items-center hover:underline ${currentPage === Math.ceil(seancesData.length / seancesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              Suivant
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <AddSeanceModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditSeanceModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      <DeleteSeanceModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
    </div>
  );
};

export default ListDesSeances;
