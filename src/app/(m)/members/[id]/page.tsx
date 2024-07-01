"use client";
import React, { useState } from 'react';
import MemberForm from '../components/MemberForm';
import { useForm } from 'react-hook-form';
import { HiOutlinePencil, HiOutlinePlusCircle, HiOutlineTrash, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { BiCreditCardFront } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { DeleteMemberModal, EditMemberModal, RegisterAccessModal } from '../components/Modals';
import AbonnementTable from '../components/Abonnement/AbonnementTable';
import { CreateAbonnementModal } from '../components/Abonnement/Modals';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import AccesTable from '../components/Access/AccesTable';

const MemberDetailsPage: React.FC = () => {
  const methods = useForm<any>();
  const [activeTab, setActiveTab] = useState('general');
  const [isMemberBlocked, setIsMemberBlocked] = useState(true);
  const [isMemberFormOpen, setIsMemberFormOpen] = useState(false); 
  const [isDeleteMemberFormOpen, setIsDeleteMemberFormOpen] = useState(false); 
  const [isAccessFormOpen, setIsAccessFormOpen] = useState(false); 
  const [isAbonnementFormOpen, setIsAbonnementFormOpen] = useState(false); 

  const router = useRouter();

  const handleReturnClick = () => {
    router.push(`/members`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <MemberForm methods={methods} />;
      case 'abonnement':
        return <AbonnementTable />;
      case 'acces':
        return <AccesTable />;
      case 'achat':
        return <div>Achat Content</div>;
      case 'solde':
        return <div>Solde Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <Button variant="ghost" onClick={handleReturnClick} className="text-xs flex items-center mb-9">
            <HiOutlineArrowSmLeft className="w-6 h-6 mr-2" />
            Gestion des membres
          </Button>
          <h1 className="text-2xl font-medium">Foulen ben foulen</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">
          <Label className="inline-flex items-center cursor-pointer">
            <Switch
              checked={isMemberBlocked}
              onChange={() => setIsMemberBlocked(!isMemberBlocked)}
              checkedText="Membre Actif"
              uncheckedText="Membre Bloqué"
            />
          </Label>
          <Button variant="outline" onClick={() => setIsAccessFormOpen(true)} size="default" className="flex items-center">
            <BiCreditCardFront className="w-6 h-6 mr-2" />
            Enregistrer accès
          </Button>
          <Button variant="default" onClick={() => setIsAbonnementFormOpen(true)} className="flex items-center">
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Ajouter abonnement
          </Button>
          <Button variant="default" onClick={() => setIsMemberFormOpen(true)} className="flex items-center text-[hsl(var(--primary))] bg-primary/10">
            <HiOutlinePencil className="w-4 h-4" />
          </Button>
          <Button variant="destructive" onClick={() => setIsDeleteMemberFormOpen(true)} className="flex items-center bg-destructive/10 text-[hsl(var(--destructive))]">
            <HiOutlineTrash className="w-4 h-4" />
          </Button>
        </div>
      </header>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex space-x-8">
          <div className="w-full">
            <nav className="flex flex-wrap justify-between border-b mb-4">
              <button
                className={`px-4 py-2 text-base ${activeTab === 'general' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('general')}
              >
                Informations générales
              </button>
              <button
                className={`px-4 py-2 text-base ${activeTab === 'abonnement' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('abonnement')}
              >
                Abonnement
              </button>
              <button
                className={`px-4 py-2 text-base ${activeTab === 'acces' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('acces')}
              >
                Accès
              </button>
              <button
                className={`px-4 py-2 text-base ${activeTab === 'achat' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('achat')}
              >
                Achat
              </button>
              <button
                className={`px-4 py-2 text-base ${activeTab === 'solde' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('solde')}
              >
                Solde
              </button>
            </nav>
            <div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      <EditMemberModal isOpen={isMemberFormOpen} onClose={() => setIsMemberFormOpen(false)} />
      <DeleteMemberModal isOpen={isDeleteMemberFormOpen} onClose={() => setIsDeleteMemberFormOpen(false)} />
      <RegisterAccessModal isOpen={isAccessFormOpen} onClose={() => setIsAccessFormOpen(false)} />
      <CreateAbonnementModal isOpen={isAbonnementFormOpen} onClose={() => setIsAbonnementFormOpen(false)} />
    </div>
  );
};

export default MemberDetailsPage;
