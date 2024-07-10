"use client";

import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FournisseurCard from './FournisseurCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AjouterFournisseurModal } from '../components/Modals';

interface Fournisseur {
  id: number;
  name: string;
}

const fournisseurs: Fournisseur[] = [
  { id: 1, name: 'Eat & Fit' },
  { id: 2, name: 'Décathlon' },
  { id: 3, name: 'Matrix' },
];

const GestionFournisseurs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const entriesPerPage = 3;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = fournisseurs.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleAddFournisseurClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-foreground">Gestion des fournisseurs</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <Button variant="default" className="flex items-center" onClick={handleAddFournisseurClick}>
          <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
          Ajouter un fournisseur
        </Button>
      </header>
      
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="relative w-full md:w-1/3 mt-4 md:mt-0 mb-4">
          <Input
            type="text"
            placeholder="Recherche"
            className="pl-10"
          />
          <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentEntries.map((fournisseur) => (
            <FournisseurCard key={fournisseur.id} id={fournisseur.id} name={fournisseur.name} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <FaArrowLeft className="mr-2" />
            Précédent
          </Button>
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(fournisseurs.length / entriesPerPage) }, (_, i) => i + 1).map(number => (
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
            disabled={currentPage === Math.ceil(fournisseurs.length / entriesPerPage)}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === Math.ceil(fournisseurs.length / entriesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      {isModalOpen && <AjouterFournisseurModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default GestionFournisseurs;
