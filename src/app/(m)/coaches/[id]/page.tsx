"use client";
import React, { useState } from 'react';
import CoachForm from './CoachForm';
import { useForm } from 'react-hook-form';
import { HiOutlinePencil, HiOutlinePlusCircle, HiOutlineTrash, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { BiCreditCardFront } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SeancesTable from './seances/SeancesTable';

const CoachDetailsPage: React.FC = () => {
  const methods = useForm<any>();
  const [activeTab, setActiveTab] = useState('general');
  const [isCoachBlocked, setIsCoachBlocked] = useState(true);
  const [isCoachFormOpen, setIsCoachFormOpen] = useState(false); 
  const [isDeleteCoachFormOpen, setIsDeleteCoachFormOpen] = useState(false); 
  const [isAccessFormOpen, setIsAccessFormOpen] = useState(false); 
  const [isAbonnementFormOpen, setIsAbonnementFormOpen] = useState(false); 

  const router = useRouter();

  const handleReturnClick = () => {
    router.push('/coaches');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <CoachForm methods={methods} />;
      case 'seances':
        return <SeancesTable/>;
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
            Gestion des coaches
          </Button>
          <h1 className="text-2xl font-medium">Foulen ben foulen</h1>
          <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 sm:mb-0 space-y-4 sm:space-y-0">
          <Label className="inline-flex items-center cursor-pointer">
            <Switch
              checked={!isCoachBlocked}
              onChange={() => setIsCoachBlocked(!isCoachBlocked)}
              checkedText="Actif"
              uncheckedText="Non actif"
            />
          </Label>
          <Button variant="default" onClick={() => setIsAbonnementFormOpen(true)} className="flex items-center">
            <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
            Ajouter séance
          </Button>
          <Button variant="default" onClick={() => setIsCoachFormOpen(true)} className="flex items-center text-[hsl(var(--primary))] bg-primary/10">
            <HiOutlinePencil className="w-4 h-4" />
          </Button>
          <Button variant="destructive" onClick={() => setIsDeleteCoachFormOpen(true)} className="flex items-center bg-destructive/10 text-[hsl(var(--destructive))]">
            <HiOutlineTrash className="w-4 h-4" />
          </Button>
        </div>
      </header>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Total des séances</CardTitle>
            <CardDescription>42</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Moyenne séances / mois</CardTitle>
            <CardDescription>14</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Paiement accumulée</CardTitle>
            <CardDescription>120 DT</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">À payé</CardTitle>
            <CardDescription>20 DT</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
        <div className="flex space-x-8">
          <div className="w-full">
            <nav className="flex flex-wrap border-b mb-4">
              <button
                className={`px-4 py-2 text-base ${activeTab === 'general' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('general')}
              >
                Informations générales
              </button>
              <button
                className={`px-4 py-2 text-base ${activeTab === 'seances' ? 'font-semibold text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' : 'text-muted-foreground border-b-2 border-transparent'}`}
                onClick={() => setActiveTab('seances')}
              >
                Séances
              </button>
            </nav>
            <div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CoachDetailsPage;
