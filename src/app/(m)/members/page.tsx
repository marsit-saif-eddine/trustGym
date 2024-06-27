"use client";

import React, { useState } from 'react';
import MemberList from './components/MemberList';
import { HiOutlinePlusCircle, HiOutlineUserGroup } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const members = [
  { name: 'John Doe', expiration: '2023-07-25', expired: false },
  { name: 'Jane Smith', expiration: '2022-05-10', expired: true },
  { name: 'Bob Johnson', expiration: null, expired: false },
  { name: 'Alice Brown', expiration: '2023-08-15', expired: false },
  { name: 'Charlie Davis', expiration: '2022-09-20', expired: true },
  { name: 'Emily Wilson', expiration: null, expired: false }
];

const MemberManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-foreground">Gestion des membres</h1>
          <p className="text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">
          <button className="bg-primary-foreground text-[hsl(var(--primary))] px-4 py-2 text-sm flex items-center space-x-2 rounded-[6px] border-2 border-[hsl(var(--primary))]">
            <HiOutlineUserGroup className="text-[hsl(var(--primary))] w-6 h-6 cursor-pointer" />
            <span>Gestion familles</span>
          </button>
          <button className="bg-primary-foreground text-[hsl(var(--primary))] px-4 py-2 text-sm flex items-center space-x-2 rounded-[6px] border-2 border-[hsl(var(--primary))]">
            <HiOutlinePlusCircle className="text-[hsl(var(--primary))] w-6 h-6 cursor-pointer" />
            <span>Créer abonnement</span>
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 text-sm flex items-center space-x-2 rounded-[6px]">
            <HiOutlinePlusCircle className="text-[hsl(var(--primary-foreground))] w-6 h-6 cursor-pointer" />
            <span>Ajouter membre</span>
          </button>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card p-4 border border-[hsl(var(--border))] rounded-[12px] text-center text-card-foreground shadow-custom-card">
          <h2 className="text-l font-bold text-primary">Nbr d'abonnés actif</h2>
          <p className="text-l">42</p>
        </div>
        <div className="bg-card p-4 border border-[hsl(var(--border))] rounded-[12px] text-center text-card-foreground shadow-custom-card">
          <h2 className="text-x font-bold text-destructive">Nbr d'abonnés bloqué</h2>
          <p className="text-l">4</p>
        </div>
      </div>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-4 md:mb-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="text-primary">Salle</label>
              <select className="bg-card border border-border rounded-[6px] p-2">
                <option>Toutes nos salles</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
              <label className="text-primary">Famille</label>
              <select className="bg-card border border-border rounded-[6px] p-2">
                <option>Tous</option>
              </select>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 mt-4 md:mt-0">
            <input
              type="text"
              className="w-full bg-card border border-border rounded-[6px] p-2 pl-10"
              placeholder="Recherche"
            />
            <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <MemberList members={currentMembers} />
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-black flex items-center hover:underline ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <FaArrowLeft className="mr-2" />
            Précédent
          </button>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            {Array.from({ length: Math.ceil(members.length / membersPerPage) }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`text-muted-foreground border border-muted-foreground rounded-[6px] px-3 py-1 ${currentPage === number ? 'bg-primary text-primary-foreground' : ''}`}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(members.length / membersPerPage)}
            className={`text-black flex items-center hover:underline ${currentPage === Math.ceil(members.length / membersPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberManagement;
