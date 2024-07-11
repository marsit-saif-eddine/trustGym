"use client";

import React, { useState } from 'react';
import MemberList from './components/MemberList';
import FamilyManagementDialog from './components/FamilyManagementDialog';
import { HiOutlinePlusCircle, HiOutlineUserGroup } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { AddMemberModal, DeleteMemberModal, EditMemberModal } from './components/Modals';
import { CreateAbonnementModal } from './components/Abonnement/Modals';

const members = [
  { id: '0', name: 'John Doe', expiration: '2023-07-25', expired: false },
  { id: '1', name: 'Jane Smith', expiration: '2022-05-10', expired: true },
  { id: '2', name: 'Bob Johnson', expiration: null, expired: false },
  { id: '3', name: 'Alice Brown', expiration: '2023-08-15', expired: false },
  { id: '4', name: 'Charlie Davis', expiration: '2022-09-20', expired: true },
  { id: '5', name: 'Emily Wilson', expiration: null, expired: false }
];

const MemberManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMemberFormOpen, setIsMemberFormOpen] = useState(false);
  const [isMemberEditFormOpen, setIsMemberEditFormOpen] = useState(false);
  const [isMemberDeleteFormOpen, setIsMemberDeleteFormOpen] = useState(false);
  const [currentMemberId, setCurrentMemberId] = useState<string | null>(null);
  const [isAbonnementFormOpen, setIsAbonnementFormOpen] = useState(false); 

  const membersPerPage = 6;

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSaveMember = (memberData: any) => {
    console.log('Saving member:', memberData);
  };

  const handleEditMember = (id: string) => {
    setCurrentMemberId(id);
    setIsMemberEditFormOpen(true);
  };

  const handleDeleteMember = (id: string) => {
    setCurrentMemberId(id);
    setIsMemberDeleteFormOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-medium text-foreground">Gestion des membres</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">
          <Button
            onClick={() => setIsDialogOpen(true)}
            variant="outline"
            size="default"
            className="flex items-center"
          >
            <HiOutlineUserGroup className="w-6 h-6 mr-2" />
            Gestion familles
          </Button>
          <Button
            variant="outline"
            size="default"
            className="flex items-center"
            onClick={() => setIsAbonnementFormOpen(true)}
          >
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Créer abonnement
          </Button>
          <Button onClick={() => setIsMemberFormOpen(true)} variant="default" className="flex items-center">
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Ajouter membre
          </Button>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Nbr d&apos;abonnés actif</CardTitle>
            <CardDescription>42</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Nbr d&apos;abonnés bloqué</CardTitle>
            <CardDescription>4</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-4 md:mb-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Label className="text-primary">Salle</Label>
              <Select className="bg-card border border-border rounded-[6px] p-2">
                <option>Toutes nos salles</option>
              </Select>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
              <Label className="text-primary">Famille</Label>
              <Select className="bg-card border border-border rounded-[6px] p-2">
                <option>Tous</option>
              </Select>
            </div>
          </div>
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

        <MemberList members={currentMembers} onEdit={handleEditMember} onDelete={handleDeleteMember} />

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
            {Array.from({ length: Math.ceil(members.length / membersPerPage) }, (_, i) => i + 1).map(number => (
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
            disabled={currentPage === Math.ceil(members.length / membersPerPage)}
            variant="ghost"
            className={`flex items-center hover:underline ${currentPage === Math.ceil(members.length / membersPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      <FamilyManagementDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      <AddMemberModal isOpen={isMemberFormOpen} onClose={() => setIsMemberFormOpen(false)} />
      <EditMemberModal isOpen={isMemberEditFormOpen} onClose={() => setIsMemberEditFormOpen(false)} />
      <DeleteMemberModal isOpen={isMemberDeleteFormOpen} onClose={() => setIsMemberDeleteFormOpen(false)} />
      <CreateAbonnementModal isOpen={isAbonnementFormOpen} onClose={() => setIsAbonnementFormOpen(false)} />

    </div>
  );
};

export default MemberManagement;
